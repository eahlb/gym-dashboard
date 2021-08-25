#!/bin/bash
docker-compose down
git pull
docker pull eahlberg12/gym-dashboard:latest
docker-compose down
docker-compose up
