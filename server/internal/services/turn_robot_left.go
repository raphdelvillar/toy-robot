package services

import (
	"github.com/raphdelvillar/toy-robot/internal/app"
	"github.com/raphdelvillar/toy-robot/internal/models"
)

type turnRobotLeftService struct {
	appCtx *app.Ctx
}

func NewTurnRobotLeftService(appCtx *app.Ctx) turnRobotLeftService {
	return turnRobotLeftService{
		appCtx: appCtx,
	}
}

func (svc turnRobotLeftService) Call() (robot *models.Robot, err error) {
	robot, err = svc.appCtx.RobotRepository.Get()
	if err != nil {
		return
	}

	err = robot.TurnLeft()
	if err != nil {
		return
	}

	return robot, err
}
