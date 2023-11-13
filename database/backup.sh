#!/bin/bash

# Name your custom MongoDB image
IMAGE_NAME="my_mongo_image"

# Name your MongoDB container
CONTAINER_NAME="my_mongo_container"

# Build the Docker image from the Dockerfile
docker build -t ${IMAGE_NAME} .

# Check if the container already exists and remove it
if [ "$(docker ps -aq -f name=${CONTAINER_NAME})" ]; then
    docker rm -f ${CONTAINER_NAME}
fi

# Run the MongoDB container in detached mode
docker run --name ${CONTAINER_NAME} -d ${IMAGE_NAME}

# Optionally, you can add commands here to wait for MongoDB to fully start
# before proceeding with the rest of your script.
