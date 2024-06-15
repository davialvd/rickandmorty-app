// servidor.js

const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const puerto = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para obtener personajes de Rick and Morty
app.get('/api/personajes', async (req, res) => {
  try {
    const respuesta = await axios.get('https://rickandmortyapi.com/api/character');
    res.json(respuesta.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});
