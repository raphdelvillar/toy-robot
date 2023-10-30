package robot

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/raphdelvillar/toy-robot/enum"
)

type initialPlacementParams struct {
	XAxisLocation int            `json:"xAxisLocation" validate:"required"`
	YAxisLocation int            `json:"yAxisLocation" validate:"required"`
	Direction     enum.Direction `json:"direction" validate:"required"`
}

func (ctrller controller) InitialPlacement(c *gin.Context) {
	params, err := resolveInitialPlacementParams(c)
	if err != nil {
		c.JSON(http.StatusBadRequest, map[string]interface{}{
			"errors": err.Error(),
		})
		return
	}

	robotInstance, err := ctrller.appCtx.SetRobotInitialPlacementService.Call(params.XAxisLocation, params.YAxisLocation, params.Direction)
	if err != nil {
		c.JSON(http.StatusBadRequest, map[string]interface{}{
			"errors": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, robotInstance)
}

func resolveInitialPlacementParams(c *gin.Context) (*initialPlacementParams, error) {
	var param initialPlacementParams
	err := c.ShouldBindJSON(&param)
	if err != nil {
		return nil, err
	}

	return &param, nil
}
