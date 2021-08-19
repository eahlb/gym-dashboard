if [ $1 ]
then docker buildx build --push --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --tag eahlberg12/gym-dashboard:$1 .
else echo "Missing build version"
fi