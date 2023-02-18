# Deploying our application to Kubernetes

We're ready to deploy our application to Kubernetes, but let's take a look at our assets.

## Goals:
1. View our sample application and containers
2. Take a look at our deployment file 
3. Take a look at our alternate deployment file
4. Deploy our application into kubernetes and verify we can see our API's working.

## Goal 1
View the sample application here: 

## Goal 2
To view the deployment file, take a look at wishlist-deployment.yaml

## Goal 3
To see another way to run the microservices, take a look at wishlist-deployment-alernate.yaml

## Goal 4
To run the microservice described in goal #1, from the current directory, run:

`kubectl create -f wishlist-deployment.yaml`

To verify that the deployment is online:
`kubectl get deployments`

To verify that the replica sets are running:
`kubectl get rs`

To verify that the pods are running:
`kubectl get pods`

To see the services:
`kubectl get services`

To interact with your API's in the minikube environment:
`minikube service wishlist-service`
