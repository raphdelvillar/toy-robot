package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os/signal"
	"syscall"
	"time"

	"github.com/raphdelvillar/toy-robot/config"
	"github.com/raphdelvillar/toy-robot/routing"
)

func main() {
	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	config.Load()

	engine := routing.NewRouter()
	// Listen and Server in 0.0.0.0:8080, changeable by APP_PORT
	server := &http.Server{
		Addr:    fmt.Sprintf(":%d", config.Global.AuthServicePort),
		Handler: engine,
	}

	go func() {
		err := server.ListenAndServe()
		if err != nil && err != http.ErrServerClosed {
			log.Fatalf("listen: %s\n", err)
		}
	}()

	// listen for interrupt signal
	<-ctx.Done()

	// restore default behavior of interrupt signals
	stop()

	log.Println("shutting down gracefully, press Ctrl+C again to force")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	err := server.Shutdown(ctx)
	if err != nil {
		log.Fatal("Server forced to shutdown: ", err)
	}

	log.Println("Server exiting")
}
