# NGINX config


### NGINX over apache?
| Apache | Nginx |
| ------ | ----- |
| Config: XML syntax | Config: C-Like syntax |
| Distributed `.htaccess` file | Centralized location blocks |
| Dynamic content using modules | Dynamic content using External processing |
| Serving static files is less efficient | Serving static files is 2x faster |
| Caching and Load-balance requires modules | Native support for Caching and Load-balance |

### install
```bash
sudo su -
apt update
apt install nginx
```

```
systemctl status nginx
systemctl start nginx
systemctl reload nginx # reload config from disk
systemctl stop nginx
```

### which configuration is being used
```bash
nginx -t # test the conf file
```

### files path
```bash
cd /etc/nginx
cd /etc/nginx/conf.d/ # put sites conf file here
unlink /etv/nginx/sites-enabled/default
cd /var/log/nginx
```

### simplest server
```bash
server {
  listen 80;
  root /var/www/mywebsite;
}
```
```bash
server {
  listen 80 default_server;
  server_name site.local www.site.local;
  index index.html index.htm index.php; 
  root /var/www/mywebsite;
}
```
We call each of these rows as a directive.

### location 
We can put multiple location blocks inside of server blocks.

| Modifier | Application to Location Definitions |
| --- | ------ |
| None | The location definition is interpreted as a prefix for the URI |
| = | The URI must be an exact match to the location definition |
| ~ | The location definition is used as a case-sensitive regular expression |
| ~* | The location definition is used as a case-insensitive regular expression |
| ^~ | If the longest prefix matches, then no regular expressions are checked |

Location directive works like this:
```bash
location [modifier] [URI] {
  ...
}

# all-requests
location / {
    ...
}

# exact URL
location = /images { 
    ...
}

# URLs including /images/ but searches for other matches
location /images/ {
     ...
}

# case-sensitive URI include and stop searching other matches
location ^~ /images {
   ...
}

# case-sensitive URI include and DOES NOT stop searching other matches
location ~ /images {
    ...
}
# case-IN-sensitive URI include and DOES NOT stop searching other matches
location ~* /images {
    ...
}

# case-insensitive URIs ending with these file types
location ~* .(png|ico|gif|jpg|jpeg|css|js)$ {
    ...
}
```

### JSON response
```bash 
server {
    listen 80 default_server;
    listen [::]:80;

    location = /complete {
        access_log /var/log/nginx/complete.access.log;
        return 200 '{"Message": "Your request is complete."}\n';
        default_type text/json;
    }
}
```

### sample config
```bash
server {
    listen 80;
    root /var/www/mysite;

    server_name mysite.local www.mysite.local;
    index index.html index.htm index.php;

    location / {
        # First attempt to serve a request as file, then
        # as directory, then fall back to displaying a 404.
        try_files $uri $uri/ =404;
    }

    location /images {
        # Allow the contents of the /image folder to be listed
        autoindex on;
    }

    # specify the page to serve for 404 errors
    error_page 404 /404.html;

    # an exact match location for the 404 page
    location = /404.html {
        # only use this location for internal requests
        internal;
    }

    # specify the page to serve for 500 errors
    error_page 500 502 503 504 /50x.html;

    # an exact match location for the 50x page
    location = /50x.html {
        # only use this location for internal requests
        internal;
    }

    # a location to demonstrate 500 errors
    location /500 {
        fastcgi_pass unix:/this/will/fail;
    }
}
```

### Redirect
```nginx
# HTTP — redirect all traffic to HTTPS
server {
    listen 80;
    listen [::]:80 default_server ipv6only=on;
    return 301 https://$host$request_uri;
}
```

### Reverse proxy vs Load balancer
- It connects client to a server and can cache the responses to serve requests.
- Load balancer is a reverse proxy which shares requests between different servers and also supports session persistence.

```bash

upstream app_server {
	server 127.0.0.1:8000;
}
server {
	location /proxy {
		proxy_pass http://app_server/;
	}
}
```
NGINX load balancer uses one of these methods to connect to a server:
- **Round-robin (default)**: Reqs one server then another:
  ```bash
  upstream app_server {
    server 127.0.0.1:8000;
    server 127.0.0.1:8001;
  }
  ```
- **Least connections**: Connect req to the server with less connections:
  ```bash
  upstream app_server {
    least_conn;
    server 127.0.0.1:8000;
    server 127.0.0.1:8001;
  }
  ```
- **IP hashing**: Generates an IP hash for each client to keep user connected to same server.
  ```bash
  upstream app_server {
    ip_hash;
    server 127.0.0.1:8000;
    server 127.0.0.1:8001;
  }
  ```
- **Weight**: Can assign weight to each server and can be used with other methods:
	```bash
	upstream app_server {
		server 127.0.0.1:8000 weight=2;
		server 127.0.0.1:8001;
	}
	```

### Security 

we can use `deny all;` or `allow ...` on location block. `IP/number` called CDR notation
```bash
location /admin {
	allow 192.168.1.1;
	allow 10.0.0.0/8;
	allow 172.16.0.0/12;
	allow 192.168.0.0/16;
	deny all;
}
```

We can put basic authentication, using this:

```bash
location /private {
	auth_basic "Please authenticate...";
	auth_basic_user_file /etc/nginx/passwords;
}
```

To generate password we need to install `apache-utils` and then use `htpasswd -c /etc/nginx/passwords NAME`

### Install SSL certificate
Generate the key and cert file:
1. Check for the `openssl` command on your system

	  ```BASH
		which openssl
 
2. Install `openssl` if needed

	  ```BASH
		sudo apt install -y openssl

3. Use the following command to:
  - Create a private key
  - Create a certificate
  - Sign the certificate with the key

    ```
    openssl req -batch -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout /etc/ssl/private/nginx.key \
        -out /etc/ssl/certs/nginx.crt
    ```

and then use it in nginx conf:
```bash
server {
  listen 443 ssl default_server;

  ssl_certificate /etc/ssl/certs/nginx.crt;
  ssl_certificate_key /etc/ssl/private/nginx.key;
	...
}
```

```bash
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
```

### Security snippet
https://cipherlist.eu/

First create a file inside `nginx/snippets/
```nginx
ssl_protocols TLSv1.3;# Requires nginx >= 1.13.0 else use TLSv1.2
ssl_prefer_server_ciphers on;
ssl_dhparam /etc/nginx/dhparam.pem; # openssl dhparam -out /etc/nginx/dhparam.pem 4096
ssl_ciphers EECDH+AESGCM:EDH+AESGCM;
ssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0
ssl_session_timeout  10m;
ssl_session_cache shared:SSL:10m;
ssl_session_tickets off; # Requires nginx >= 1.5.9
ssl_stapling on; # Requires nginx >= 1.3.7
ssl_stapling_verify on; # Requires nginx => 1.3.7
resolver $DNS-IP-1 $DNS-IP-2 valid=300s;
resolver_timeout 5s;
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";
```

### Use docker
The main commands we'll be using are:

- `docker run ...`: Use a container image to run a command
- `docker build ...`: Build a container image from a Dockerfile specification

`docker run`
```BASH
docker run --publish 80:80 nginx
                     ^  ^  ^
Local port ──────────┘  │  │
                        │  │
Container port  ────────┘  │
                           │
Container image name ──────┘
```

1. Start an nginx container

```BASH
docker run --publish 80:80 nginx
```

2. Open a browser to [http://localhost](http://localhost)

```bash
docker build --tag IMAGE .
```

### Debug
Tail the logs:
```bash
tail -f /var/logs/nginx/*.log
```

Test the ports are up and running:
```bash
sudo lsof -i :80 -i :443 | grep nginx
sudo apt install net-tools
sudo netstat -plan | grep nginx
```
