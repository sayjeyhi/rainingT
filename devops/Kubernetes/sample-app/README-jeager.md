# First look at Jaeger

## Goals:
1. Understand what Jaeger does
2. See it running
3. See data flowing in it for the hotrod application

# Goals 1
What is Jaeger?

Jaeger is a distributed tracing analyzer that was released by Uber. It is compatible with the opentracing standard and both opentracing and Jaeger are CNCF projects. If you're new to the space, think of Jaeger as an opensource New Relic

https://github.com/jaegertracing/jaeger-kubernetes

Once deployed, startup Jaeger with `minikube service jaeger-query`

# Goals 2
See it in action!

We can install Jaeger from the github site for their kubernetes project: https://github.com/jaegertracing/jaeger-kubernetes

# Goals 3
Let's deploy our sample application with the command:
`kubectl apply -f jaeger-example.yaml`