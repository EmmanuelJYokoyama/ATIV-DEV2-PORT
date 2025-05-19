const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // Permite JSON no body
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 3000;

// Rotas da API
const projectRoutes = require("./projects");
const certificationRoutes = require("./certifications");

app.use("/api/projects", projectRoutes);
app.use("/api/certifications", certificationRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
