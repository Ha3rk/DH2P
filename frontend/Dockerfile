# Build stage
# Use an official Node runtime as a parent image for the build stage
FROM node:16 as build

# Set the working directory in the container
WORKDIR /usr/src/app/build

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies

# Copy the rest of your app's source code
COPY . .


# Production stage
# Use an official nginx image as a base image
FROM nginx:alpine

# Copy built assets from the build stage to the default nginx serving directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 300
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
