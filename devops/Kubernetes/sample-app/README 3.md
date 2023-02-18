# Helm

## Goals:
1. Understand what Helm is.
2. Understand what Helm is with respect to our application
2. Run the helm chart for our application


## Goal 1
Helm (https://helm.sh) is a package manager for Kubernetes. Kubernetes is all about yaml files, and after a while, when your yaml files grow large, it becomes incredibly painful to debug issues.

This is why people use Helm- to manage complexity in their yaml's. It also provides a way to easily update and rollback their kubernetes artifacts. And finally, it's also the most popular place to find user generated charts. Think of it like the maven or npm for Kubernetes

## Goal 2
Take a look at the wishlist folder for our deployment and service converted to a helm chart.

## Goal 3

I already have helm installed via the instructions at: https://docs.helm.sh/using_helm/#installing-helm

For reference, I'm running: 
```
helm version
Client: &version.Version{SemVer:"v2.8.2", GitCommit:"a80231648a1473929271764b920a8e346f6de844", GitTreeState:"clean"}
Server: &version.Version{SemVer:"v2.8.2", GitCommit:"a80231648a1473929271764b920a8e346f6de844", GitTreeState:"clean"}
```

To see existing charts:
`helm ls`

To see the tiller components:
`kubectl get deployments --all-namespaces`

To run our helm chart:
`helm install -n wishlist-chart  -f values.yaml .`

