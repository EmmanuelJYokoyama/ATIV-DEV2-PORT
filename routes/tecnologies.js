const express = require("express");
const router = express.Router();
const db = require("./db");

router.post("/", async (req, res) => {
  try {
    const { nome, categoria } = req.body;
    await db.query("INSERT INTO tecnologias (nome, categoria) VALUES (?, ?)", [nome, categoria]);
    res.status(201).json({ message: "Tecnologia adicionada!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const [tecnologias] = await db.query("SELECT * FROM tecnologias");
    res.status(200).json(tecnologias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const [tecnologias] = await db.query("SELECT * FROM tecnologias WHERE id = ?", [req.params.id]);
    res.status(200).json(tecnologias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



router.put("/:id", async (req, res) => {
  try {
    const { nome, categoria } = req.body;
    await db.query("UPDATE tecnologias SET nome=?, categoria=? WHERE id=?", [nome, categoria, req.params.id]);
    res.json({ message: "Tecnologia atualizada!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await db.query("DELETE FROM tecnologias WHERE id=?", [req.params.id]);
    res.json({ message: "Tecnologia removida!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
