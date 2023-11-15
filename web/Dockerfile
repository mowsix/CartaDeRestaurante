# Use the official Node image as a base image
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application files
COPY . .

# Build the application
RUN npm run build --prod

# Use a lightweight base image for the final image
FROM nginx:alpine

# Copy the built application from the previous stage
COPY --from=build /app/dist/angular-app/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
