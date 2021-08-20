#!/bin/bash
git pull
docker pull eahlberg12/gym-dashboard:latest
docker-compose down
docker-compose up -d
chromium-browser --start-fullscreen http://localhost:8080 &
exit 0
