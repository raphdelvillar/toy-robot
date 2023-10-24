package robot

import (
	"fmt"
	"log"

	"github.com/raphdelvillar/toy-robot/enum"
)

type Robot struct {
	XAxisLocation    int
	YAxisLocation    int
	CurrentDirection enum.Direction
}

func (r *Robot) InitialPlacement(xAxis int, yAxis int, direction enum.Direction) {
	r.XAxisLocation = xAxis
	r.YAxisLocation = yAxis
	r.CurrentDirection = direction
}

func (r *Robot) MoveForward() {
	switch r.CurrentDirection {
	case enum.DirectionNorth:
		r.YAxisLocation++
		break
	case enum.DirectionSouth:
		r.YAxisLocation--
		break
	case enum.DirectionEast:
		r.XAxisLocation++
		break
	case enum.DirectionWest:
		r.XAxisLocation--
		break
	default:
		log.Panic("not a valid direction")
	}
}

func (r *Robot) TurnLeft() {
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
		log.Panic("not a valid direction")
	}
}

func (r *Robot) TurnRight() {
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
		log.Panic("not a valid direction")
	}
}

func (r *Robot) Report() {
	fmt.Println(fmt.Sprintf("%v,%v,%s", r.XAxisLocation, r.YAxisLocation, r.CurrentDirection))
}
