package robot

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (ctrller controller) TurnRight(c *gin.Context) {
	robot, err := ctrller.appCtx.RobotRepository.Get()
	if err != nil {
		c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"errors": err.Error(),
		})
		return
	}

	err = robot.TurnRight()
	if err != nil {
		c.JSON(http.StatusBadRequest, map[string]interface{}{
			"errors": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"robot": robot,
	})
}