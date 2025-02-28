# Usa la imagen oficial de Node.js como base
FROM node:18

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente de la API al contenedor
COPY . .

# Exponer el puerto en el que corre la API
EXPOSE 3000

# Ejecutar el servidor Node.js
CMD ["node", "index.js"]
