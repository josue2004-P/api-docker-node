const db = require('../db/database');

// Función para obtener todos los usuarios
const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        reject('Error en la consulta: ' + err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = { getAllUsers };