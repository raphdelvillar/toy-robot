package app

import (
	"github.com/raphdelvillar/toy-robot/enum"
	"github.com/raphdelvillar/toy-robot/internal/models"
)

type IRobotRepository interface {
	Set(robot models.Robot) (*models.Robot, error)
	Get() (*models.Robot, error)
}

type ISetRobotInitialPlacementService interface {
	Call(xAxisLocation int, yAxisLocation int, direction enum.Direction) (robotInstance *models.Robot, err error)
}
