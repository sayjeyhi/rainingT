# Logging from your application

## Goals
1. Start up EFK stack in minikube
2. Run your application and see the logs in Kibana

## Goal 1
We can start up the EFK (Elastic-Fluentd-Kibana) stack in minikube. Installing these components is a little bit of work, but minikube gives it to us as an addon.

`minikube addons enable efk`

Note, this will take a while, and you probably want to use minikube in a high memory mode.

Once it's up and running, visit and configure Kibana by going to the URL by typing:

`minikube addons open efk`

## Goal 2
Now let's deploy our application by running

`kubectl apply -f wishlist-deployment.yaml`

The app has some logs in it that we can look at in Kibana.