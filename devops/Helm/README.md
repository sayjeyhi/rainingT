# 📆 Helm

### installation
Visit https://helm.sh/docs/intro/install/.
On Mac:
```bash
brew install helm
```


### using Helm hub
We can navigate to https://artifacthub.io/ to find and deploy applications

For example if we want to install `kube-state-metrics` which helps us alot for monitoring and managing stuff. We have to do:

```bash
$ helm repo add my-repo https://charts.bitnami.com/bitnami
$ helm install my-release my-repo/kube-state-metrics
```
First command is adding repo and second one is installing package.

```bash
helm repo add [NAME] [URL] [flags]
```

> Note: If we want to install package within a specific namespace we need to create a namespace on K8S and then pass it instead of `my-release`

```bash
kubectl create ns metrics
kubectl get ns
```

After all we can check:
```bash
Helm list -n metrics
```
To see if the deployment is done.

### General usages
```bash
Helm create first-chart
Helm show chart 
Helm template [chart-name] // view changes before apply
Helm upgrade [chart-name] . // apply
Helm delete
```

### Templating language
```helm
{{ if eq .Values.env "staging }}
   Foo: "test"
{{ else }}
   Bar: "test"
{{ end }}
```

### ConfigMap vs Secret
Secrets will be used for storing sensitive data