package appctx

import (
	"github.com/raphdelvillar/toy-robot/internal/app"
	"github.com/raphdelvillar/toy-robot/internal/repositories"
	"github.com/raphdelvillar/toy-robot/internal/services"
)

func Init() *app.Ctx {
	appCtx := &app.Ctx{}

	appCtx.RobotRepository = repositories.NewRobotRepository()
	appCtx.SetRobotInitialPlacementService = services.NewSetRobotInitialPlacementService(appCtx)
	return appCtx
}
