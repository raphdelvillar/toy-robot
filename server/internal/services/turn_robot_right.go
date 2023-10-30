package services

import (
	"github.com/raphdelvillar/toy-robot/internal/app"
	"github.com/raphdelvillar/toy-robot/internal/models"
)

type turnRobotRightService struct {
	appCtx *app.Ctx
}

func NewTurnRobotRightService(appCtx *app.Ctx) turnRobotRightService {
	return turnRobotRightService{
		appCtx: appCtx,
	}
}

func (svc turnRobotRightService) Call() (robot *models.Robot, err error) {
	robot, err = svc.appCtx.RobotRepository.Get()
	if err != nil {
		return
	}

	err = robot.TurnRight()
	if err != nil {
		return
	}

	return robot, err
}
