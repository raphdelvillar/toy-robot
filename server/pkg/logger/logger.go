package logger

import (
	"fmt"
	"log"
)

func Panic(message string) {
	log.Panic(message)
}

func Fatal(err error) {
	log.Fatal(err)
}

func FatalError(messages string, err error) {
	log.Fatalf(messages, err)
}

func Print(message string) {
	fmt.Println(message)
}
