package app

import (
	"log"
	"os"
)

var (
	environment Env
)

const (
	ENV_TEST Env = iota // Test environment (Default).
	ENV_DEV             // Developer environment (APP_ENV=dev).
	ENV_STG             // Stage environment (APP_ENV=stg).
	ENV_PRO             // Production environment (APP_ENV=production).
)

type Env int

func (e Env) String() string {
	return [...]string{"test", "dev", "stg", "production"}[e]
}

func (e Env) Is(appEnv Env) bool {
	return e == appEnv
}

func init() {
	appEnv := os.Getenv("APP_ENV")
	switch appEnv {
	case ENV_DEV.String():
		environment = ENV_DEV
	case ENV_STG.String():
		environment = ENV_STG
	case ENV_PRO.String():
		environment = ENV_PRO
	default:
		err := os.Setenv("APP_ENV", ENV_TEST.String())
		if err != nil {
			log.Fatal(err)
		}
		environment = ENV_TEST
	}
}

func ENV() Env {
	return environment
}
