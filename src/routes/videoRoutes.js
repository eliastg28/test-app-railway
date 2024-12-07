// src/routes/videoRoutes.js
const express = require('express');
const { getVideos } = require('../controllers/videoController');

const router = express.Router();

// Definir la ruta que maneja la obtención de los videos
router.get('/', getVideos);

module.exports = router;
