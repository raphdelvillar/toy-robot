package models

import (
	"fmt"
	"log"

	"github.com/raphdelvillar/toy-robot/enum"
	"github.com/raphdelvillar/toy-robot/pkg/logger"
)

type Robot struct {
	XAxisLocation    int
	YAxisLocation    int
	CurrentDirection enum.Direction
	IsPositioned     bool
	// belongs to Stage
	Stage Stage
}

func (r *Robot) InitialPlacement(xAxis int, yAxis int, direction enum.Direction) {
	r.XAxisLocation = xAxis
	r.YAxisLocation = yAxis
	r.CurrentDirection = direction
	r.IsPositioned = true
}

func (r *Robot) MoveForward() (isValid bool) {
	switch r.CurrentDirection {
	case enum.DirectionNorth:
		if r.YAxisLocation == r.Stage.Height {
			return false
		}
		r.YAxisLocation++
		break
	case enum.DirectionSouth:
		if r.YAxisLocation == -r.Stage.Height {
			return false
		}
		r.YAxisLocation--
		break
	case enum.DirectionEast:
		if r.XAxisLocation == r.Stage.Width {
			return false
		}
		r.XAxisLocation++
		break
	case enum.DirectionWest:
		if r.XAxisLocation == -r.Stage.Width {
			return false
		}
		r.XAxisLocation--
		break
	default:
		log.Panic("not a valid direction")
	}

	return true
}

func (r *Robot) TurnLeft() (isValid bool) {
	switch r.CurrentDirection {
	case enum.DirectionNorth:
		r.CurrentDirection = enum.DirectionEast
		break
	case enum.DirectionSouth:
		r.CurrentDirection = enum.DirectionWest
		break
	case enum.DirectionEast:
		r.CurrentDirection = enum.DirectionSouth
		break
	case enum.DirectionWest:
		r.CurrentDirection = enum.DirectionNorth
		break
	default:
		logger.Panic("not a valid direction")
	}

	return true
}

func (r *Robot) TurnRight() (isValid bool) {
	switch r.CurrentDirection {
	case enum.DirectionNorth:
		r.CurrentDirection = enum.DirectionWest
		break
	case enum.DirectionSouth:
		r.CurrentDirection = enum.DirectionEast
		break
	case enum.DirectionEast:
		r.CurrentDirection = enum.DirectionNorth
		break
	case enum.DirectionWest:
		r.CurrentDirection = enum.DirectionSouth
		break
	default:
		logger.Panic("not a valid direction")
	}

	return true
}

func (r *Robot) Report() (message string) {
	message = fmt.Sprintf("%v,%v,%s", r.XAxisLocation, r.YAxisLocation, r.CurrentDirection)
	logger.Print(message)

	return message
}
