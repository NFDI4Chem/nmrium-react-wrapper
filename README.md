# nmr_displayer

Wrapping NMRium

### local development

```docker build -t nmrium-rw:dev .```

```
docker run \
	-it \
	--rm \
	-v ${PWD}:/app \
	-v /app/node_modules \
	-p 3001:3000 \
	-e CHOKIDAR_USEPOLLING=true \
	nmrium-rw:dev
```

### local development (docker-compose)

```docker-compose up -d --build```

```docker-compose stop```

### production build

```docker build -f Dockerfile.prod -t nmrium-rw:prod -m 8g .```

```docker run -it --rm -p 1337:80 nmrium-rw:prod```