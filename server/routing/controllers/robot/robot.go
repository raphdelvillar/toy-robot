package robot

import "github.com/raphdelvillar/toy-robot/internal/app"

type controller struct {
	appCtx *app.Ctx
}

func NewController(appCtx *app.Ctx) controller {
	return controller{
		appCtx: appCtx,
	}
}
