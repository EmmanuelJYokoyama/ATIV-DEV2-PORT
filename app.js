const express = require("express");
const path = require("path");
const app = express();
const indexRouter = require("./routes/index");
const { redirect } = require("express/lib/response");

// Configurações
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rotas
app.use("/", indexRouter);

app.use('/certifications', (req,res)=>{
  res.render("certifications.ejs");
})

// Inicializar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
