package storage

import "os"

type digitalOceanStorageConfig struct {
	key    string
	secret string
	url    string
	region string
	bucket string
}

type DigitalOceanStorageConfig interface {
	GetKey() string
	GetSecret() string
	GetUrl() string
	GetRegion() string
	GetBucket() string
}

func NewDigitalOceanStorageConfig() DigitalOceanStorageConfig {
	var cfg digitalOceanStorageConfig
	cfg.key = os.Getenv("DIGITAL_OCEAN_SPACE_KEY")
	cfg.secret = os.Getenv("DIGITAL_OCEAN_SPACE_SECRET")
	cfg.url = os.Getenv("DIGITAL_OCEAN_SPACE_URL")
	cfg.region = os.Getenv("DIGITAL_OCEAN_SPACE_REGION")
	cfg.bucket = os.Getenv("DIGITAL_OCEAN_SPACE_BUCKET")
	return &cfg
}

func (c *digitalOceanStorageConfig) GetKey() string {
	return c.key
}

func (c *digitalOceanStorageConfig) GetSecret() string {
	return c.secret
}

func (c *digitalOceanStorageConfig) GetUrl() string {
	return c.url
}

func (c *digitalOceanStorageConfig) GetRegion() string {
	return c.region
}

func (c *digitalOceanStorageConfig) GetBucket() string {
	return c.bucket
}
