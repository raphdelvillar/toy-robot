package repositories

import (
	"sync"

	"github.com/raphdelvillar/toy-robot/internal/models"
)

var lock = &sync.Mutex{}

var robotInstance *models.Robot

type RobotRepository struct{}

func NewRobotRepository() RobotRepository {
	return RobotRepository{}
}

func (rbr RobotRepository) Set(robot models.Robot) *models.Robot {
	lock.Lock()
	defer lock.Unlock()
	robotInstance = &robot

	return robotInstance
}

func (rbr RobotRepository) Get() *models.Robot {
	return robotInstance
}
