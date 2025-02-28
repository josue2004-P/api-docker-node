FROM node:18

# Instalación de dockerize
RUN apt-get update && apt-get install -y wget \
    && wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -xvzf dockerize-linux-amd64-v0.6.1.tar.gz -C /usr/local/bin

WORKDIR /usr/src/app

# Copiar los archivos del proyecto
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente de la API
COPY . .

# Exponer el puerto
EXPOSE 3000

# Esperar a que MySQL esté listo antes de iniciar la API
CMD ["dockerize", "-wait", "tcp://db:3306", "-timeout", "30s", "node", "index.js"]
