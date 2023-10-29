package appctx

import (
	"github.com/raphdelvillar/toy-robot/internal/app"
	"github.com/raphdelvillar/toy-robot/internal/repositories"
)

func Init() *app.Ctx {
	appCtx := &app.Ctx{}

	appCtx.RobotRepository = repositories.NewRobotRepository()
	return appCtx
}
