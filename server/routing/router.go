package routing

import (
	"github.com/gin-gonic/gin"
	"github.com/raphdelvillar/toy-robot/routing/controllers/robot"
	"github.com/raphdelvillar/toy-robot/routing/controllers/stage"
)

func NewRouter() *gin.Engine {
	r := InitRouter()

	stageController := stage.NewController()
	r.GET("/api/v1/stage/get_stats", stageController.GetStats)

	robotController := robot.NewController()
	r.POST("/api/v1/robot/initial_placement", robotController.InitialPlacement)
	r.POST("/api/v1/robot/move_forward", robotController.MoveForward)
	r.POST("/api/v1/robot/move_left", robotController.MoveLeft)
	r.POST("/api/v1/robot/move_right", robotController.MoveRight)
	r.GET("/api/v1/robot/report", robotController.Report)
}
