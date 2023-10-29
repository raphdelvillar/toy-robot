package robot

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (ctrller controller) Report(c *gin.Context) {
	robot, err := ctrller.appCtx.RobotRepository.Get()
	if err != nil {
		c.JSON(http.StatusInternalServerError, map[string]interface{}{
			"errors": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, robot)
}
