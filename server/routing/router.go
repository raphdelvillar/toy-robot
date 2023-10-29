package routing

import (
	"github.com/gin-gonic/gin"
	"github.com/raphdelvillar/toy-robot/routing/appctx"
	"github.com/raphdelvillar/toy-robot/routing/controllers/robot"
	"github.com/raphdelvillar/toy-robot/routing/controllers/stage"
)

func NewRouter() *gin.Engine {
	r := InitRouter()

	appCtx := appctx.Init()

	stageController := stage.NewController(appCtx)
	r.GET("/api/v1/stage/get_stats", stageController.GetStats)

	robotController := robot.NewController(appCtx)
	r.POST("/api/v1/robot/initial_placement", robotController.InitialPlacement)
	r.POST("/api/v1/robot/move_forward", robotController.MoveForward)
	r.POST("/api/v1/robot/turn_left", robotController.TurnLeft)
	r.POST("/api/v1/robot/turn_right", robotController.TurnRight)
	r.GET("/api/v1/robot/report", robotController.Report)

	return r
}
