package robot

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (ctrller controller) MoveRight(c *gin.Context) {
	c.JSON(http.StatusOK, map[string]interface{}{})
}