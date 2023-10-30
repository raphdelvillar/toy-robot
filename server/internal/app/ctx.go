package app

type Ctx struct {
	RobotRepository                 IRobotRepository
	SetRobotInitialPlacementService ISetRobotInitialPlacementService
}
