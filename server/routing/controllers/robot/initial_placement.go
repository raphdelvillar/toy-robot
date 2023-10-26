package robot

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (ctrller controller) InitialPlacement(c *gin.Context) {
	c.JSON(http.StatusOK, map[string]interface{}{})
}
