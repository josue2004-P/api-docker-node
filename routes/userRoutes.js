const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definir la ruta para obtener todos los usuarios
router.get('/data', userController.getUsers);

module.exports = router;
