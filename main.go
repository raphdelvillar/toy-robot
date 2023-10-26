package main

import (
	"github.com/raphdelvillar/toy-robot/config"
	"github.com/raphdelvillar/toy-robot/internal/models"
)

func main() {
	stage := models.Stage{
		Width:  config.Global.StageWidth,
		Height: config.Global.StageHeight,
	}
}
