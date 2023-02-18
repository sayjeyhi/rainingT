# Configmaps

Configuration information should live outside of the application. How can we do this in Kubernetes?

## Goals
1. Create a configmap that can be referenced by the application via env variables
2. Create a configmap that can be referenced by the application via a volume mounted file


## Goal 1
Create the deployment by running 
`kubectl apply -f wishlist-deployment-configmap-simple.yaml`

Exec into the auth container in the wishlist pod with a command like:
`kubectl exec -it wishlist-<podid> -c auth bash`

To look find your env variable run:
`env | grep LOG_LEVEL`


## Goal 2
Create the deployment by running 
`kubectl apply -f wishlist-deployment-configmap-advanced.yaml`

Exec into the auth container in the wishlist pod with a command like:
`kubectl exec -it wishlist-<podid> -c auth bash`

To look find your env variable run:
`cat /var/lib/wishlist/log.properties`


