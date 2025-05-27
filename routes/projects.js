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

// Listar projetos com filtro por tecnologia
router.get("/", async (req, res) => {
  const { tecnologiaId } = req.query;

  try {
    let query = `
     SELECT DISTINCT p.* FROM projects p
      LEFT JOIN projetosxtecnologia px ON p.id = px.projeto_id
      LEFT JOIN tecnologias t ON px.tecnologia_id = t.id
    `;
    const params = [];

    if (tecnologiaId) {
      query += " WHERE t.id = ?";
      params.push(tecnologiaId);
    }

    const [projects] = await db.query(query, params);
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
