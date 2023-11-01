/*const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})
app.get('/iniciar-sesion', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})
*/

const express = require("express");

const path = require("node:path");
const server = express();
server.use(express.static("public"));
const PORT = process.env.PORT || 3000;
server.listen(PORT, err => {
  console.log(
    err
      ? `Servidor no pudo montarse. ${err}`
      : `Servidor corre en http://localhost:${PORT}`
  );
});

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});


server.get("/quienesomos", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/quienesomos.html"));
});


server.get("/about", (req, res) => {
  res.json({
    message: "Hola ",
    aboutUs: "Grupo 6",
  });
});
