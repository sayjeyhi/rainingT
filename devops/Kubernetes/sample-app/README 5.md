# Prometheus

## Goals:
1. Deploy Prometheus
2. See it running!
3. View Kubernetes stats
4. View node information
5. View application metrics

# Prometheus + Kubernetes demo

## Step 1: Deploy
Helm is the easiest way to do this. Check out `https://github.com/kubernetes/charts/tree/master/stable/prometheus`.

We can run `helm install stable/prometheus` to get the stock prometheus server.

In this case, we will run: `helm install stable/prometheus --name prom-demo -f values.yaml` to use our custom yaml.

## Step 2: See it running
Running `minikube service prom-demo-prometheus-server` will bring up the browser with prometheus server running.

## Step 3: Check out Kubernetes stats
Check out `count(kube_pod_container_status_running)` to see our all our pods running.

## Step 4: Check out node information

The node exporter gives you node relative information as well like CPU/disk usage etc.

Run `count(node_cpu{mode="system", instance="192.168.99.100:9100"})` will return the cpu count which should match the number of CPU's in `kubectl describe nodes`

### Step 5: App metrics

1. Run the app: `kubectl apply -f wishlist.yaml`
2. Visit the app after it's deployed: `minikube service wishlist-service`
3. You'll see the  `/metrics` endpoint with go stats
4. Visit the `/products` endpoint 5 times.
5. You'll see a new "product_calls" metric in the dashboard
