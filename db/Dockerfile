# Usa una imagen de Node.js alpine como base
FROM node:18

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Comando para ejecutar el módulo de datos
CMD ["node", "db.js"]
