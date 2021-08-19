#!/bin/bash
docker pull eahlberg12/gym-dashboard:latest
rm docker-compose.yml
wget https://raw.githubusercontent.com/eahlb/gym-dashboard/master/docker-compose.yml
docker-compose down
docker-compose up -d
chromium-browser --start-fullscreen http://localhost:8080 &
exit 0
