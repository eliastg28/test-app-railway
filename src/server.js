// src/server.js
require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const videoRoutes = require('./routes/videoRoutes');
const routineRoutes = require('./routes/routineRoutes');
const tipsRoutes = require('./routes/tipsRoutes');

const app = express();

// Configura el puerto desde las variables de entorno o usa 3000 como valor por defecto
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Usa el enrutador de autenticación
app.use('/auth', authRoutes);
app.use('/videos', videoRoutes);
app.use('/routines', routineRoutes);
app.use('/tips', tipsRoutes);

// Levanta el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
