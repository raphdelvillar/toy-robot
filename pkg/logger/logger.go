package logger

import (
	"fmt"
	"log"
)

func Panic(message) {
	log.Panic(message)
}

func Print(message) {
	fmt.Println(message)
}
