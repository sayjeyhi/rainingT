# Playing with ingress controllers

## Goals:
1. Understand what ingress/envoy is.
2. See how envoy fits in...
3. How it can be implemented with Contour and envoy

# Goals 1
What is it?
Services are of 3 types: ClusterIP, NodePort and Loadbalancers. ClusterIP and NodePort are used for applications internal to your infrastructure. For applications that you'd want to expose externally, you'd use a loadbalancer service. This is great, but for every endpoint, you'd end up using another loadbalancer resource from your cloud provider, and costs you a bit more.

Ingress allows you you to route requests to services based on the request host or path, centralizing a number of services into a single entrypoint. So think of it as the central point for 1 entrypoint for multiple requests, where loadbalancer is a 1 entrypoint for a specific host or path.

Ingress information: https://kubernetes.io/docs/concepts/services-networking/ingress/#what-is-ingress

# Goals 2
Envoy is a simple service proxy that proxies traffic from one source to another. The goal of envoy is to make networking and observability of your applications more visible.

When all service traffic flow through an Envoy mesh, you can visualize problem areas via consistent observability, tune overall performance or add features like rate limiting in a single spot.

Link: https://www.envoyproxy.io/

It's also common to see it used an ingress controller either by itself, or using another package that extends it- like Heptio Contour (https://github.com/heptio/contour). We'll use contour for our example.

# Goals 3

First, we need to add Contour to our cluster. I'm going to follow the docs (https://github.com/heptio/contour#add-contour-to-your-cluster), and install Contour with:

`kubectl apply -f https://j.hept.io/contour-deployment-rbac`

Then, I'll deploy my application:
`kubectl apply -f wishlist-contour.yaml`

To check the status:
`kubectl get ing`

To get the contour ingress URL, I can run:
`minikube service -n heptio-contour contour --url`

You can hit the host:port/wishlist URL to see the wishlist API's working.