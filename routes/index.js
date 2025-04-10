const express = require("express");
const router = express.Router();

const portfolioData = {
  projects: [
    {
      title: "Projeto 1",
      description: "Descrição do projeto 1...",
      link: "https://example.com/projeto1"
    },
    {
      title: "Projeto 2",
      description: "Descrição do projeto 2...",
      link: "https://example.com/projeto2"
    },
    {
      title: "Projeto 3",
      description: "Descrição do projeto 3...",
      link: "https://example.com/projeto3"
    },
    {
      title: "Projeto 4",
      description: "Descrição do projeto 4...",
      link: "https://example.com/projeto4"
    }
  ],
  certifications: [
    {
      title: "Certificação 1",
      description: "Descrição da certificação 1..."
    },
    {
      title: "Certificação 2",
      description: "Descrição da certificação 2..."
    },
    {
      title: "Certificação 3",
      description: "Descrição da certificação 3..."
    },
    {
      title: "Certificação 4",
      description: "Descrição da certificação 4..."
    }
  ]
};
router.get("/certifications", (req, res) => {
    res.render("certifications", { certifications: portfolioData.certifications });
  });

router.get("/", (req, res) => {
  res.render("index", { portfolio: portfolioData });
});

module.exports = router;
