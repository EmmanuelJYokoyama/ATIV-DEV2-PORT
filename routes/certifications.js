const express = require("express");
const router = express.Router();
const db = require("./db");

// Criar uma certificação
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    await db.query("INSERT INTO certifications (title, description) VALUES (?, ?)", [title, description]);
    res.status(201).json({ message: "Certificação adicionada!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Listar certificações
router.get("/", async (req, res) => {
  try {
    const [certifications] = await db.query("SELECT * FROM certifications");
    res.status(200).json(certifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar certificação
router.put("/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    await db.query("UPDATE certifications SET title=?, description=? WHERE id=?", [title, description, req.params.id]);
    res.json({ message: "Certificação atualizada!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Deletar certificação
router.delete("/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM certifications WHERE id=?", [req.params.id]);
    res.json({ message: "Certificação removida!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
