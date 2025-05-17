const express = require("express");
const app = express();
app.use(express.json());
const PORT = "3000";
const JSONData = {
  description: "Productos",
  items: [
    { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
    { id: 2, nombre: "FIFA 22 PS5", precio: 1000 },
    { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
    { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
    { id: 5, nombre: "Skin Valorant", precio: 120 },
    { id: 6, nombre: "Taza de Star Wars", precio: 220 },
  ],
};

app.get("/productos", (req, res) => {
  res.status(200).send(JSONData);
});

app.post("/productos", (req, res) => {
  const { id, nombre, precio } = req.body;
  const newProducto = {
    id,
    nombre,
    precio,
  };
  JSONData.items.push(newProducto);
  res.status(201).send("Producto creado correctamente");
});

app.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  const producto = JSONData.items.find((p) => p.id === parseInt(id));
  if (nombre) producto.nombre = nombre;
  if (precio) producto.precio = precio;
  res.status(200).send("Producto actualizado correctamente.");
});

app.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  const index = JSONData.items.findIndex((p) => p.id === parseInt(id));

  if (index === -1) {
    return res.status(404).send("Producto no encontrado.");
  }

  JSONData.items.splice(index, 1);
  res.status(200).send("Producto eliminado correctamente.", JSONData);
});

app.get("/productos/precio/:precio", (req, res) => {
  const precio = parseFloat(req.params.precio);
  const productos = JSONData.items.filter((p) => p.precio === precio);
  res.status(200).json(productos);
});

app.get("/productos/rango", (req, res) => {
  const productos = JSONData.items.filter((p) => p.precio >= 50 && p.precio <= 250);
  res.status(200).json(productos);
});

app.get("/productos/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const producto = JSONData.items.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).send("Producto no encontrado.");
  }

  res.status(200).json(producto);
});

app.get("/productos/nombre/:nombre", (req, res) => {
  const nombre = req.params.nombre.toLowerCase();
  const producto = JSONData.items.find((p) => p.nombre.toLowerCase() === nombre);

  if (!producto) {
    return res.status(404).send("Producto no encontrado.");
  }

  res.status(200).json(producto);
});

app.listen(PORT, () => {
  console.log("Servidor levantado en el puerto 3000");
});
