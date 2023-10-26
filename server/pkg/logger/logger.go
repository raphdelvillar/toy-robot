package logger

import (
	"fmt"
	"log"
)

func Panic(message string) {
	log.Panic(message)
}

func FatalError(err error) {
	log.Panic(err.Error())
}

func Print(message string) {
	fmt.Println(message)
}
