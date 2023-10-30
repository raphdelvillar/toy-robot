package app

type Ctx struct {
	RobotRepository                 IRobotRepository
	SetRobotInitialPlacementService ISetRobotInitialPlacementService
	MoveRobotForwardService         IMoveRobotForwardService
	TurnRobotLeftService            ITurnRobotLeftService
	TurnRobotRightService           ITurnRobotRightService
}
