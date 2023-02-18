# Secrets!


## Goals
1. Create a secret that can be referenced by the application via env variables
2. Create a secret that can be referenced by the application via a volume mounted file


## Goal 1
Create the deployment by running 
`kubectl apply -f wishlist-deployment-secret.yaml`

To look find your env variable run:
`env | grep MYSQL_CONNECTION_STRING`


## Goal 2

Create the deployment by running 
`kubectl apply -f wishlist-deployment-secret.yaml`

To look find your env variable run:
`cat /etc/mysql/connection-string`
