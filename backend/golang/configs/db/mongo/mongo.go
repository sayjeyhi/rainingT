package db

import (
	"context"
	"log"
	"time"

	dbConfig "github.com/xxxx/xxxx/configs/db"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type MongoConnection interface {
	Close()
	Client() *mongo.Client
	DB() *mongo.Database
}

type mongoConnection struct {
	client   *mongo.Client
	database *mongo.Database
	context  *context.Context
}

func NewMongoConnection(cfg dbConfig.MongoConfig) (MongoConnection, error) {
	dsn := cfg.Dsn()
	client, err := mongo.NewClient(options.Client().ApplyURI(dsn))
	if err != nil {
		log.Fatal(err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Mongo database connection established!")

	return &mongoConnection{
		client:   client,
		database: client.Database(cfg.DbName()),
	}, nil
}

func (c *mongoConnection) Close() {
	err := c.client.Disconnect(*c.context)
	if err != nil {
		return
	}
}

func (c *mongoConnection) Client() *mongo.Client {
	return c.client
}

func (c *mongoConnection) DB() *mongo.Database {
	return c.database
}
