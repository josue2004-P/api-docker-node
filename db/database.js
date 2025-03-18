const mysql = require('mysql2');

// Configuración de la base de datos MySQL
const db = mysql.createConnection({
  host: 'db',           // Nombre del contenedor de la base de datos (lo configuraremos en Docker)
  user: 'root',         // Usuario de MySQL
  password: 'root',     // Contraseña de MySQL
  database: 'test_db'   // Nombre de la base de datos
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;