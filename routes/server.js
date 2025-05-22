const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3001", // apenas seu frontend pode acessar
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json()); // Permite JSON no body
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 3005;

// Rotas da API
const projectRoutes = require("./projects");
const certificationRoutes = require("./certifications");

app.use("/api/projects", projectRoutes);
app.use("/api/certifications", certificationRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
