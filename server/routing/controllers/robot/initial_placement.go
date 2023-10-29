package robot

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/raphdelvillar/toy-robot/config"
	"github.com/raphdelvillar/toy-robot/enum"
	"github.com/raphdelvillar/toy-robot/internal/models"
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

	robot := models.Robot{
		XAxisLocation:    params.XAxisLocation,
		YAxisLocation:    params.YAxisLocation,
		CurrentDirection: params.Direction,
		IsPositioned:     true,
		Stage: models.Stage{
			Width:  config.Global.StageWidth,
			Height: config.Global.StageHeight,
		},
	}

	robotInstance, err := ctrller.appCtx.RobotRepository.Set(robot)
	if err != nil {
		c.JSON(http.StatusBadRequest, map[string]interface{}{
			"errors": err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"robot": robotInstance,
	})
}

func resolveInitialPlacementParams(c *gin.Context) (*initialPlacementParams, error) {
	var param initialPlacementParams
	err := c.ShouldBindJSON(&param)
	if err != nil {
		return nil, err
	}

	return &param, nil
}
