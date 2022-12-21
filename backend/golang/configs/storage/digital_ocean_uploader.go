package storage

import (
	"io"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
	"github.com/xxxx/xxxx/configs/storage"
)

type DigitalOceanUploader interface {
	Upload(file io.Reader, fileName string, folder string, contentType string) (*s3manager.UploadOutput, error)
	Delete(filePath string, bucket string) error
}

type digitaloceanUploader struct {
	session *session.Session
	bucket  string
}

func NewDigitalOceanUploader() DigitalOceanUploader {
	cnf := storage.NewDigitalOceanStorageConfig()
	var uploader digitaloceanUploader
	key := cnf.GetKey()
	secret := cnf.GetSecret()

	s3Config := &aws.Config{
		Credentials: credentials.NewStaticCredentials(key, secret, ""),
		Endpoint:    aws.String(cnf.GetUrl()),
		Region:      aws.String(cnf.GetRegion()),
	}

	sess, err := session.NewSession(s3Config)
	if err != nil {
		panic(err)
	}
	uploader.session = sess
	uploader.bucket = cnf.GetBucket()

	return &uploader
}

func (s *digitaloceanUploader) Upload(file io.Reader, fileName string, folder string, contentType string) (*s3manager.UploadOutput, error) {

	uploader := s3manager.NewUploader(s.session)
	acl := "public-read"

	return uploader.Upload(&s3manager.UploadInput{
		Bucket:      aws.String(s.bucket),
		Key:         aws.String(folder + fileName),
		Body:        file,
		ContentType: aws.String(contentType),
		ACL:         &acl,
	})
}

func (s *digitaloceanUploader) Delete(filePath string, bucket string) error {
	svc := s3.New(s.session)

	_, err := svc.DeleteObject(&s3.DeleteObjectInput{
		Bucket: aws.String(bucket),
		Key:    aws.String(filePath),
	})
	if err != nil {
		return err
	}
	err = svc.WaitUntilObjectNotExists(&s3.HeadObjectInput{
		Bucket: aws.String(bucket),
		Key:    aws.String(filePath),
	})
	if err != nil {
		return err
	}
	return nil
}
