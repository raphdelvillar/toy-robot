package services

import (
	"fmt"

	"github.com/raphdelvillar/toy-robot/config"
	"github.com/raphdelvillar/toy-robot/enum"
	"github.com/raphdelvillar/toy-robot/internal/app"
	"github.com/raphdelvillar/toy-robot/internal/models"
)

type setRobotInitialPlacementService struct {
	appCtx *app.Ctx
}

func NewSetRobotInitialPlacementService(appCtx *app.Ctx) setRobotInitialPlacementService {
	return setRobotInitialPlacementService{
		appCtx: appCtx,
	}
}

func (svc setRobotInitialPlacementService) Call(xAxisLocation int, yAxisLocation int, direction enum.Direction) (robotInstance *models.Robot, err error) {
	robot := models.Robot{
		Stage: models.Stage{
			Width:  config.Global.StageWidth,
			Height: config.Global.StageHeight,
		},
	}

	if direction.IsNotValid() {
		return nil, fmt.Errorf(fmt.Sprintf("%v direction is not valid", direction))
	}

	err = robot.InitialPlacement(xAxisLocation, yAxisLocation, direction)
	if err != nil {
		return
	}

	robotInstance, err = svc.appCtx.RobotRepository.Set(robot)
	if err != nil {
		return
	}

	return robotInstance, err
}
