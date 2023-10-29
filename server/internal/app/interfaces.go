package app

import (
	"github.com/raphdelvillar/toy-robot/internal/models"
)

type IRobotRepository interface {
	Set(robot models.Robot) (*models.Robot, error)
	Get() (*models.Robot, error)
}
