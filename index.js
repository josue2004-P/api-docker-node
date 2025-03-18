const express = require('express');
require('dotenv').config();

// Crear el servidor de express
const app = express();

const cors = require('cors');
// CORS
app.use(cors())

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Importar las rutas
const userRoutes = require('./routes/userRoutes');

// Configuración de la API
app.use('/api', userRoutes);

// Iniciar el servidor
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});


