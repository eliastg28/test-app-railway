// src/routes/authRoutes.js
const express = require('express');
const { registerUser } = require('../controllers/authController');
const { loginUser } = require('../controllers/authController');

const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', registerUser);
router.post('/login', loginUser); 

// Exporta el enrutador
module.exports = router;
