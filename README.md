## Build
This project is built to work on multiple different architectures. 

`docker buildx build -f node.dockerfile --push --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --tag eahlberg12/gym-dashboard:latest .`

Images can be found at docker hub (https://hub.docker.com/repository/docker/eahlberg12/gym-dashboard)

## Development
For development

`docker run --rm -it -p 8080:3000 -v ${PWD}:/var/www eahlberg12/gym-dashboard dev`

can be used to run `nodemon` with the current directory as a mounted volume.