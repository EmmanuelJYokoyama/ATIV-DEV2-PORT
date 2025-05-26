document.addEventListener("DOMContentLoaded", async () => {
  await carregarProjetos();
  await carregarCertificacoes();
  await carregarGithubProfile();
  iniciarTypewriter();
  configurarEventosDeClique();
});

// 🔹 Função para carregar projetos via API
async function carregarProjetos() {
  try {
    const response = await fetch("http://localhost:3005/api/projects/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log(response)

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const projetos = await response.json();
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    projetos.forEach(projeto => {
      const card = `
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all w-80 mx-auto">
          <h3 class="text-2xl font-bold text-indigo-800 mb-4">${projeto.title}</h3>
          <p class="text-gray-600 mb-4">${projeto.description}</p>
          <a href="${projeto.link}" class="text-blue-500 hover:underline">Ver mais</a>
        </div>
      `;
      container.innerHTML += card;
    });
  } catch (error) {
    console.error("Erro ao carregar projetos:", error);
  }
}


// 🔹 Função para carregar certificações via API
async function carregarCertificacoes() {
  try {
    const response = await fetch("http://localhost:3005/api/certifications/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const certificacoes = await response.json();

    const container = document.getElementById("certifications-container");
    container.innerHTML = "";

    certificacoes.forEach(cert => {
      const card = `
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all w-80 mx-auto">
          <h3 class="text-2xl font-bold text-indigo-800 mb-4">${cert.title}</h3>
          <p class="text-gray-600 mb-4">${cert.description}</p>
        </div>
      `;
      container.innerHTML += card;
    });
  } catch (error) {
    console.error("Erro ao carregar certificações:", error);
  }
}

// 🔹 Função para carregar perfil do GitHub
async function carregarGithubProfile() {
  const githubProfile = document.getElementById("github-profile");

  try {
    const response = await fetch("https://api.github.com/users/EmmanuelJYokoyama");
    const data = await response.json();

    githubProfile.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <img src="${data.avatar_url}" alt="Foto de ${data.login}" class="w-20 h-20 rounded-full mb-4">
        <h3 class="text-2xl font-bold text-indigo-800 mb-2">${data.name || data.login}</h3>
        <p class="text-gray-600 mb-2">Seguidores: ${data.followers} | Seguindo: ${data.following}</p> 
        <p class="text-gray-600 mb-4">Repositórios Públicos: ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank" 
           class="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg transition">
          Visitar Perfil
        </a>
      </div>
    `;
  } catch (error) {
    githubProfile.innerHTML = `<p class="text-red-500">Erro ao carregar os dados do GitHub.</p>`;
  }
}


// 🔹 Adiciona eventos de clique nos projetos e certificações
function configurarEventosDeClique() {
  const links = {
    projeto1: "https://www.inicepg.univap.br/cd/INIC_2023/anais/arquivos/RE_0528_0429_01.pdf",
    projeto2: "https://github.com/Draco-Imperium/API_FATEC1",
    projeto3: "#",
    certificado1: "http://www.wagnerscj.com.br/cti30/certificados/8f201620bd24bb1e26131efcd33a1d80.pdf",
    certificado2: "../images/certificado_trabalho-aceito_ICEIJID0528.pdf",
    certificado4: "../images/INOVADORES20242.pdf",
  };

  Object.keys(links).forEach(id => {
    const element = document.querySelector(`.${id}`);
    if (element) {
      element.addEventListener("click", () => {
        if (links[id] === "#") {
          window.alert("Projeto em desenvolvimento!");
        } else {
          window.location.href = links[id];
        }
      });
    }
  });
}

// 🔹 Manipulação de menu mobile usando jQuery
$(document).ready(function () {
  $("#menu-button").on("click", function () {
    const menu = $("#mobile-menu");
    if (menu.is(":hidden")) {
      menu.removeClass("hidden").hide().slideDown(500).css({ opacity: 0 }).animate({ opacity: 1 }, 500);
    } else {
      menu.animate({ opacity: 0 }, 500, function () {
        $(this).slideUp(500, function () {
          $(this).addClass("hidden");
        });
      });
    }
  });
});
