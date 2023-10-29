package robot

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (ctrller controller) MoveForward(c *gin.Context) {
	robot := ctrller.appCtx.RobotRepository.Get()

	err := robot.MoveForward()
	if err != nil {
		c.JSON(http.StatusBadRequest, map[string]interface{}{
			"errors": err.Error(),
		})
	}

	c.JSON(http.StatusOK, map[string]interface{}{})
}
