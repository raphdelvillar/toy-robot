package config

import (
	"fmt"
	"os"
	"path"
	"path/filepath"
	"runtime"

	"github.com/joho/godotenv"
	"github.com/kelseyhightower/envconfig"
	"github.com/raphdelvillar/toy-robot/pkg/logger"
)

var Global GlobalCfg

type GlobalCfg struct {
	ServicePort    int    `envconfig:"SERVICE_PORT" required:"true"`
	AllowedOrigins string `envconfig:"ALLOWED_ORIGINS" required:"true"`
	StageWidth     int    `envconfig:"STAGE_WIDTH" required:"true" default:"5"`
	StageHeight    int    `envconfig:"STAGE_HEIGHT" required:"true" default:"5"`
}

// Load the environment variables from .env files
func Load() {
	var (
		envFile               string
		absoluteConfigDirPath = fmt.Sprintf("%s/%s", rootDir(), "config")
	)

	if len(os.Getenv("ENV")) > 0 {
		envFile = absoluteConfigDirPath + os.ExpandEnv("/.env.$ENV")
		loadEnvFile(envFile)
	}

	// Environment variables loaded from "/.env.$ENV" will not be overridden by "/.env"
	envFile = absoluteConfigDirPath + "/.env"
	loadEnvFile(envFile)

	if err := processGlobalConfig(); err != nil {
		logger.Fatal(err)
	}
}

func loadEnvFile(filePath string) {
	if _, err := os.Stat(filePath); err != nil {
		// env files are optional
		return
	}

	err := godotenv.Load(filePath)
	if err != nil {
		logger.FatalError("unable to load environment variables", err)
	}
}

// SetAppEnv should only be used in tests
func SetAppEnv(name string) {
	err := os.Setenv("ENV", name)
	if err != nil {
		logger.FatalError("unable to set ENV environment variables", err)
	}
}

// processGlobalConfig puts the environment variables in config.Global variable
func processGlobalConfig() error {
	if err := envconfig.Process("", &Global); err != nil {
		return fmt.Errorf("error processing environment variables %w", err)
	}

	return nil
}

// rootDir
func rootDir() string {
	_, b, _, _ := runtime.Caller(0)
	d := path.Join(path.Dir(b))

	return filepath.Dir(d)
}
