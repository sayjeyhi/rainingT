# ⚙️ GoLang Sample Configs

#### App Env Config Sample usage: 
```go
package db

import (
	"github.com/xxxx/xxxx/configs/app" // change according to your package structure
)

func main () {
    if app.ENV().Is(app.ENV_DEV) {
		// do something
	} else {
		// do something else :)
	}
}
```

#### MongoDB Config Sample usage: 
```go
package main
import (	
	dbConfig "github.com/xxxx/xxxx/configs/db"
)
func main() {
	mongoConfig = dbConfig.NewMongoConfig(os.Getenv("DATABASE_NAME"))
	mongoConnection, err = dbConfig.NewMongoConnection(mongoConfig)
	if err != nil {
		panic(err)
	}
}
```

#### Storage Config Sample usage (Digital Ocean): 
```go
package main
import (	
	"github.com/xxxx/xxxx/configs/storage"
)
func main() {
	uploader := utils.NewDigitalOceanUploader()
	uploadResult, err := uploader.Upload(&buf, uuid.NewString()+"."+extension, "xxxxxxx/", extension)
	if err != nil {
		writer.WriteHeader(http.StatusInternalServerError)
		_, err = writer.Write(CreateErrorResponse(http.StatusInternalServerError, err))
		if err != nil {
			return
		}
		return
	}
}
```