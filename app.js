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

app.use('/projects', (req,res)=>{
  res.render("projects.ejs");
})

app.use('/resume', (req,res)=>{
  res.redirect("https://github.com/EmmanuelJYokoyama/Curriculo/blob/main/Currículo%20EmmanuelYokoyama.pdf");
})

// Inicializar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
