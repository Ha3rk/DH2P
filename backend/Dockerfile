# Use the official Node.js 16 image as a base image
FROM node:16

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Your app binds to port 4000. Expose the port the app runs on.
EXPOSE 4000

# Define the command to run the app using CMD
CMD [ "node", "server.js" ]
