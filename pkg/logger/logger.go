package logger

import (
	"fmt"
	"log"
)

func Panic(message string) {
	log.Panic(message)
}

func Print(message string) {
	fmt.Println(message)
}
