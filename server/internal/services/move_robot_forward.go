package services

import (
	"github.com/raphdelvillar/toy-robot/internal/app"
	"github.com/raphdelvillar/toy-robot/internal/models"
)

type moveRobotForwardService struct {
	appCtx *app.Ctx
}

func NewMoveRobotForwardService(appCtx *app.Ctx) moveRobotForwardService {
	return moveRobotForwardService{
		appCtx: appCtx,
	}
}

func (svc moveRobotForwardService) Call() (robot *models.Robot, err error) {
	robot, err = svc.appCtx.RobotRepository.Get()
	if err != nil {
		return
	}

	err = robot.MoveForward()
	if err != nil {
		return
	}

	return robot, err
}
