package stage

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/raphdelvillar/toy-robot/config"
)

func (ctrller controller) GetStats(c *gin.Context) {
	c.JSON(http.StatusOK, map[string]interface{}{
		"height": config.Global.StageHeight,
		"width":  config.Global.StageWidth,
	})
}
