const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Import file
const dns = require("dns");

// Define a pasta de build do React como uma pasta estática
app.use(express.static(path.join(__dirname, "build")));

// Rota que serve o index.html do React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/api/data", (req, res) => {
  const data = req.body;

  // Faça o que desejar com os dados recebidos
  console.log("Dados recebidos:", data);

  // Responda ao cliente
  res.json({ message: "Dados recebidos com sucesso!" });
});

// Inicia o servidor na porta desejada
const port = process.env.PORT || "0080"; // ou qualquer outra porta que você preferir
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
