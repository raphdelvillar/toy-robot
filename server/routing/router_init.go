package routing

import (
	"strings"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/raphdelvillar/toy-robot/config"
)

func InitRouter() *gin.Engine {
	r := gin.Default()

	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = strings.Split(config.Global.AllowedOrigins, ",")
	corsConfig.AllowCredentials = true

	r.Use(cors.New(corsConfig))

	return r
}
