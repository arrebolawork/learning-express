const express = require("express");
const app = express();
const PORT = "3000";

// Ruta: Raíz del sitio (‘/’) ,Metodo: get, Acción: Mostrar un mensaje de bienvenida
app.get("/", (req, res) => {
  res.status(200).send("Mostrando mensaje de bienvenida");
});

// Ruta: Productos, Método: get, Acción: Mostrar un mensaje que diga: listado de productos
app.get("/productos", (req, res) => {
  res.status(200).send("Mostrando mensaje de listado de productos");
});

// Ruta: Productos, Método: post, Acción: Mostrar un mensaje que diga: crear un producto
app.post("/productos", (req, res) => {
  res.status(201).send("crear un producto");
});

// Ruta: Productos, Método: put, Acción: Mostrar un mensaje que diga: actualizar un producto
app.put("/productos", (req, res) => {
  res.status(204).send("actualizar un producto");
});

// Ruta: Productos, Método: delete, Acción: Mostrar un mensaje que diga: borrar un producto
app.delete("/productos", (req, res) => {
  res.status(204).send("borrar un producto");
});

// Ruta: Usuarios, Metodo: get, Acción: Mostrar un mensaje que diga: listado de usuarios
app.get("/usuarios", (req, res) => {
  res.status(200).send("listado de usuarios");
});

// Ruta: Usuarios, Método: post, Acción: Mostrar un mensaje que diga: crear un usuario
app.post("/usuarios", (req, res) => {
  res.status(201).send("crear un usuario");
});

// Ruta: Usuarios, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar un usuario
app.put("/usuarios", (req, res) => {
  res.status(204).send("actualizar un usuario");
});

// Ruta: Usuarios, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar un usuario
app.delete("/usuarios", (req, res) => {
  res.status(204).send("borrar un usuario");
});

app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto 3000");
});
