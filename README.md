A simple ExpressJS using a MongoDB database to serve as a display in my gym.

## Build
This project is built to work on multiple different architectures using buildx. Every push to master will build and push a new latest version to docker hub.

`docker buildx build -f node.dockerfile --push --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --tag eahlberg12/gym-node-backend:latest .`

Images can be found at docker hub (https://hub.docker.com/repository/docker/eahlberg12/gym-node-backend)

## Development
For development

`docker run --rm -it -p 8080:3000 -v ${PWD}:/var/www -v ${PWD}/config_local:/var/www/config eahlberg12/gym-node-backend dev`

can be used to run `nodemon` with the current directory and `local_config` as a mounted volume. 

## API
There is also a api-only version that skips the view engine, run with

`docker run --rm -it -p 8080:3000 -v ${PWD}:/var/www -v ${PWD}/config_local:/var/www/config eahlberg12/gym-node-backend api-only`