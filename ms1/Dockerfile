# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /ms1

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Make port 3001 available to the world outside this container
EXPOSE 3001

# Define the command to run your app
CMD ["node", "get-one.js"]
