package robot

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (ctrller controller) Report(c *gin.Context) {
	c.JSON(http.StatusOK, map[string]interface{}{})
}
