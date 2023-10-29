package repositories

import (
	"fmt"
	"sync"

	"github.com/raphdelvillar/toy-robot/internal/models"
)

var lock = &sync.Mutex{}

var robotInstance *models.Robot

type RobotRepository struct{}

func NewRobotRepository() RobotRepository {
	return RobotRepository{}
}

func (rbr RobotRepository) Set(robot models.Robot) (*models.Robot, error) {
	lock.Lock()
	defer lock.Unlock()
	robotInstance = &robot

	return robotInstance, nil
}

func (rbr RobotRepository) Get() (*models.Robot, error) {
	if robotInstance == nil {
		return nil, fmt.Errorf("Robot instance is not created")
	}

	return robotInstance, nil
}
