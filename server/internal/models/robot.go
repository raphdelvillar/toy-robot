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
		if r.YAxisLocation >= r.Stage.Height {
			err = fmt.Errorf("not a valid movement")
		}
		r.YAxisLocation++
		break
	case enum.DirectionSouth:
		if r.YAxisLocation <= -r.Stage.Height {
			err = fmt.Errorf("not a valid movement")
		}
		r.YAxisLocation--
		break
	case enum.DirectionEast:
		if r.XAxisLocation >= r.Stage.Width {
			err = fmt.Errorf("not a valid movement")
		}
		r.XAxisLocation++
		break
	case enum.DirectionWest:
		if r.XAxisLocation <= -r.Stage.Width {
			err = fmt.Errorf("not a valid movement")
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

func (r *Robot) TurnRight() (err error) {
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

func (r *Robot) Report() (message string) {
	message = fmt.Sprintf("%v,%v,%s", r.XAxisLocation, r.YAxisLocation, r.CurrentDirection)
	logger.Print(message)

	return message
}
