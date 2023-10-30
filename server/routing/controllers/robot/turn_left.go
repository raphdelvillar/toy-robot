package robot

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (ctrller controller) TurnLeft(c *gin.Context) {
	robot, err := ctrller.appCtx.TurnRobotLeftService.Call()
	if err != nil {
		c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"errors": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, robot)
}
