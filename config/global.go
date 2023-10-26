package config

var Global GlobalCfg

type GlobalCfg struct {
	StageWidth  int `envconfig:"STAGE_WIDTH" required:"true" default:"5"`
	StageHeight int `envconfig:"STAGE_HEIGHT" required:"true" default:"5"`
}
