# Use the official MongoDB image
FROM mongo:latest

# Set the MongoDB environment variables
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=password
ENV MONGO_INITDB_DATABASE=dh2p_database

# Expose the default MongoDB port
EXPOSE 27017

# The CMD directive is not necessary since the MongoDB image
# has its own default command to run the server.