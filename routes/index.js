const express = require("express");
const router = express.Router();

const portfolioData = {
  projects: [
    {
      title: 'OTIMIZAÇÃO DO PROCESSO DE EMBALAGENS USANDO PROCESSAMENTO DE IMAGENS COM BASE EM ALGORITMO DE FRAÇÃO DE ÁREA',
      description: `Busca-se a melhor distribuição e a organização de objetos em uma
            área pré-definida, utilizando imagens pré selecionadas e aplicando o algoritmo da fração de área, obtida
            pela razão entre o número de pixels brancos e números total de pixels na imagem binária, que tem por
            objetivo analisar objetos em uma área, de forma que tal espaço possa comportar o máximo de objetos
            possíveis, e dessa maneira, reduzir a produção em massa de embalagens com componentes em
            excesso`,
      link: 'https://www.inicepg.univap.br/cd/INIC_2023/anais/arquivos/RE_0528_0429_01.pdf',
    },
    {
      title: 'Acompanhamento do Desempenho dos Vereadores em Exercício',
      description: `Criação de uma plataforma web que disponibilize informações sobre o
            desempenho dos vereadores da cidade durante o atual mandato. As informações estão
            disponibilizadas no site da prefeitura de São José dos Campos.
  
            O objetivo é oferecer aos eleitores dados claros e acessíveis que ajudem a tomar decisões informadas nas
            eleições municipais que se aproximavam.
  
            Meu papel durante todo o desenvolvimento foi na atuação como PO (Product Owner) e principalmente no desenvolvimento do backend, auxiliando meus colegas que possuem
            menos experiência, revisando os códigos e implementando padrões de CI&CD durante o desenvolvimento da aplicação.`,
      link: 'https://github.com/Draco-Imperium/API_FATEC1',
    },
    {
      title: 'Meu Dojo - Em desenvolvimento',
      description: `Este projeto se deu início com um colega que teve como objetivo criar um sistema de gerenciamento de academias de luta
            Nos juntamos para dar continuidade no projeto e aprimorar suas funcionalidades. Utilizamos React, NodeJS com TypeScript e SASS como tecnologias principais.
            Realizamos também uma API para cadastro de alunos, consultas e vendas de produtos relacionados à cada esporte.`,
      link: '#',
    },
    {
      title: 'Projeto de Controle de estoque de Lojas - Em desenvolvimento',
      description: `Muitas lojas possuem um CRM de controle de estoque, porém é complicado um controle preciso
            dessas mercadorias. Com o sistema de controle de estoque que desenvolvi, se torna muito mais prático e intuitivo de registrar e
            dar baixa em produtos.`,
      link: '#',
    },
    {
      title: 'CrumbleApp - Em desenvolvimento',
      description: `O CrumbleApp é uma aplicação intuitiva para organização de tarefas e projetos, ideal para indivíduos e equipes. 
            Oferece gerenciamento de tarefas, colaboração em tempo real, notificações, visualização em calendário, promovendo produtividade e eficiência.<br>
            Realizado utilizando o Framework PHP, Laravel, juntamente com SCSS para estilizar e a biblioteca FullCallendar, nativa do JavaScript.`,
      link: '#',
    },
    {
      title: 'Dashboard Personalizado Helpnei - Em desenvolvimento',
      description: `Para o API (Aprendizado por Projeto Integrador) do 2° semestre da FATEC São José dos Campos, temos como
                    empresa parceira a Helpnei, empresa que oferece uma plataforma que facilita a publicação e comercialização de produtos e serviços entre vizinhos em condomínios residenciais. 
                    Com isso, nos foi solicitado com que fosse criado um dashboard de indicadores para monitorar e visualizar o impacto da plataforma, facilitando o acompanhamento do 
                    rescimento do projeto e oferecendo dados estratégicos e detalhados para patrocinadores e stakeholders.`,
      link: '#',
    }
  ],
  certifications: [
    {
      title: "Certificação de Análise de Dados com Excel",
      description: "Certificação ministrada pelo Prof. Msc. Wagner dos Santos C. de Jesus, com foco em criação de Macros utilizando VBA e gráficos dinâmicos."
    },
    {
      title: "Certificação de Iniciação Científica",
      description: "Certificação de aprovação no XVII Encontro Latino-Americano de Iniciação Científica Jr. (2023), focada na otimização do processo de embalagens utilizando fração de área."
    },
    {
      title: "Certificação Python - Data Science",
      description: "Certificação em análise de dados e machine learning utilizando Python, bibliotecas como Pandas, Numpy e Scikit-learn."
    },
    {
      title: "Certificação 19ª Edição da ESCOLA DE INOVADORES",
      description: "Capacitação em inovação, empreendedorismo e tecnologia, com metodologias práticas como design thinking para soluções criativas e impacto social."
    }
  ]
};
router.get("/certifications", (req, res) => {
    res.render("certifications", { certifications: portfolioData.certifications });
  });

router.get("/projects", (req, res) => {
  res.render("projects", { projects: portfolioData.projects });
});

router.get("/", (req, res) => {
  res.render("index", { portfolio: portfolioData });
});

module.exports = router;
