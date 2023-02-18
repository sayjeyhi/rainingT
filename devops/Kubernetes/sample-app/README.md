# Liveness Probes

## Goals: 
1) Understand liveness probes in Kubernetes

## Goal 1
Liveness Probes are often used in deployments with many containers. They help with startup and container running states (https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#container-probes )

To run our example:
`kubectl apply -f wishlist-deployment-liveness.yaml`

To see if our probes are running:
`kubectl describe <pod_name>`