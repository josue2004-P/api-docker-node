const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Configuración de la base de datos MySQL
const db = mysql.createConnection({
  host: 'db',           // Nombre del contenedor de la base de datos (lo configuraremos en Docker)
  user: 'root',         // Usuario de MySQL
  password: 'root',     // Contraseña de MySQL
  database: 'test_db'   // Nombre de la base de datos
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Configuración de la API
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error en la consulta: ', err);
      res.status(500).send('Error en la consulta a la base de datos');
      return;
    }
    res.json(results);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
