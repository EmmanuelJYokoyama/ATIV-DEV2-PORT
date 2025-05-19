const express = require("express");
const router = express.Router();
const db = require("./db");

// Criar um projeto
router.post("/", async (req, res) => {
  try {
    const { title, description, link } = req.body;
    await db.query("INSERT INTO projects (title, description, link) VALUES (?, ?, ?)", [title, description, link]);
    res.status(201).json({ message: "Projeto criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Listar projetos
router.get("/", async (req, res) => {
  try {
    const [projects] = await db.query("SELECT * FROM projects");
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar projeto
router.put("/:id", async (req, res) => {
  try {
    const { title, description, link } = req.body;
    await db.query("UPDATE projects SET title=?, description=?, link=? WHERE id=?", [title, description, link, req.params.id]);
    res.json({ message: "Projeto atualizado!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Deletar projeto
router.delete("/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM projects WHERE id=?", [req.params.id]);
    res.json({ message: "Projeto deletado!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
