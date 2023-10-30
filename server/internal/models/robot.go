package models

import (
	"fmt"

	"github.com/raphdelvillar/toy-robot/enum"
	"github.com/raphdelvillar/toy-robot/pkg/logger"
)

type Robot struct {
	XAxisLocation    int            `json:"xAxisLocation"`
	YAxisLocation    int            `json:"yAxisLocation"`
	CurrentDirection enum.Direction `json:"currentDirection"`
	IsPositioned     bool           `json:"isPositioned"`
	// belongs to Stage
	Stage Stage `json:"stage"`
}

func (r *Robot) InitialPlacement(xAxis int, yAxis int, direction enum.Direction) {
	r.XAxisLocation = xAxis
	r.YAxisLocation = yAxis
	r.CurrentDirection = direction
	r.IsPositioned = true
}

func (r *Robot) MoveForward() (err error) {
	switch r.CurrentDirection {
	case enum.DirectionNorth:
		if !r.isMovementValid() {
			err = fmt.Errorf("not a valid movement")
			return
		}
		r.YAxisLocation++
		break
	case enum.DirectionSouth:
		if !r.isMovementValid() {
			err = fmt.Errorf("not a valid movement")
			return
		}
		r.YAxisLocation--
		break
	case enum.DirectionEast:
		if !r.isMovementValid() {
			err = fmt.Errorf("not a valid movement")
			return
		}
		r.XAxisLocation++
		break
	case enum.DirectionWest:
		if !r.isMovementValid() {
			err = fmt.Errorf("not a valid movement")
			return
		}
		r.XAxisLocation--
		break
	default:
		err = fmt.Errorf("not a valid direction")
	}

	return err
}

func (r *Robot) TurnLeft() (err error) {
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
		err = fmt.Errorf("not a valid direction")
	}

	return err
}

func (r *Robot) TurnRight() (err error) {
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
		err = fmt.Errorf("not a valid direction")
	}

	return err
}

func (r *Robot) Report() (message string) {
	message = fmt.Sprintf("%v,%v,%s", r.XAxisLocation, r.YAxisLocation, r.CurrentDirection)
	logger.Print(message)

	return message
}

func (r *Robot) isMovementValid() (isValid bool) {
	switch r.CurrentDirection {
	case enum.DirectionNorth:
		if r.YAxisLocation == r.Stage.Height-1 {
			return false
		}
		break
	case enum.DirectionSouth:
		if r.YAxisLocation == 0 {
			return false
		}
		break
	case enum.DirectionEast:
		if r.XAxisLocation == r.Stage.Width-1 {
			return false
		}
		break
	case enum.DirectionWest:
		if r.XAxisLocation == 0 {
			return false
		}
	}

	return true
}
