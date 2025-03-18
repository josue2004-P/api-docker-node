const userModel = require('../models/modelUser');

// Controlador para manejar la petición de obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los usuarios');
  }
};

module.exports = { getUsers };