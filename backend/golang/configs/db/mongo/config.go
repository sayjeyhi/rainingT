package db

import (
	"fmt"
	"os"
)

type MongoConfig interface {
	Dsn() string
	DbName() string
}

type mongoConfig struct {
	dbUser     string
	dbPass     string
	dbPort     string
	dbHost     string
	dbName     string
	replicaSet string
	dsn        string
}

func NewMongoConfig(dbName string) MongoConfig {
	var dsn string
	var cfg mongoConfig
	cfg.dbUser = os.Getenv("MONGO_USERNAME")
	cfg.dbPass = os.Getenv("MONGO_PASSWORD")
	cfg.dbHost = os.Getenv("MONGO_HOST")
	cfg.dbPort = os.Getenv("MONGO_PORT")
	cfg.replicaSet = os.Getenv("MONGO_REPLICA_SET")
	cfg.dbName = dbName

	dsn = fmt.Sprintf("mongodb://%s:%s@%s:%s/%s?authSource=admin&authMechanism=SCRAM-SHA-1", cfg.dbUser, cfg.dbPass, cfg.dbHost, cfg.dbPort, cfg.dbName)

	cfg.dsn = dsn

	return &cfg
}

func (c *mongoConfig) Dsn() string {
	return c.dsn
}

func (c *mongoConfig) DbName() string {
	return c.dbName
}
