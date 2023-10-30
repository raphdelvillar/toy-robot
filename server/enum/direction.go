package enum

type Direction string

const (
	DirectionNorth Direction = "NORTH"
	DirectionSouth Direction = "SOUTH"
	DirectionWest  Direction = "WEST"
	DirectionEast  Direction = "EAST"
)

func (d Direction) IsValid() bool {
	switch d {
	case DirectionNorth, DirectionSouth, DirectionWest, DirectionEast:
		return true
	default:
		return false
	}
}

func (d Direction) IsNotValid() bool {
	return !d.IsValid()
}
