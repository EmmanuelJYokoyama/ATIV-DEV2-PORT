document.addEventListener("DOMContentLoaded", async () =>{
  // Função Typewriter para o nome digitado dinamicamente

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
  const nameElement = document.getElementById("nome-digitado");
  const texts = [
    "Olá visitante, eu sou Emmanuel Yokoyama",
    "Bem vindo ao meu portfólio!",
    "Apaixonado por Tecnologia e por novas invenções!"
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentText = texts[textIndex];

    if (!isDeleting && charIndex <= currentText.length) {
      nameElement.innerHTML = currentText.substring(0, charIndex);
      charIndex++;
      setTimeout(typeWriter, 95);
    } else if (isDeleting && charIndex >= 0) {
      nameElement.innerHTML = currentText.substring(0, charIndex);
      charIndex--;
      setTimeout(typeWriter, 50);
    } else {
      isDeleting = !isDeleting;

      if (!isDeleting) {
        textIndex = (textIndex + 1) % texts.length;
      }

      setTimeout(typeWriter, 1000);
    }
  }

  typeWriter();

  // Adiciona eventos de clique nos projetos
  const projectElement = document.querySelector(".projeto1");
  const projectElement2 = document.querySelector(".projeto2");
  const projectElement3 = document.querySelector(".projeto3");
  const certificado1 = document.querySelector(".cert1");
  const certificado2 = document.querySelector(".cert2");
  const certificado4 = document.querySelector(".cert4");

  projectElement.addEventListener("click", function () {
    window.location.href =
      "https://www.inicepg.univap.br/cd/INIC_2023/anais/arquivos/RE_0528_0429_01.pdf";
  });

  projectElement2.addEventListener("click", function () {
    window.location.href = "https://github.com/Draco-Imperium/API_FATEC1";
  });

  projectElement3.addEventListener("click", function () {
    window.location.href = "#";
    window.alert("Projeto em desenvolvimento!");
  });

  certificado1.addEventListener("click", function () {
    window.location.href =
      "http://www.wagnerscj.com.br/cti30/certificados/8f201620bd24bb1e26131efcd33a1d80.pdf";
  });

  certificado2.addEventListener("click", function () {
    window.location.href =
      "../images/certificado_trabalho-aceito_ICEIJID0528.pdf";
  });

  certificado4.addEventListener("click", function () {
    window.location.href = "../images/INOVADORES20242.pdf";
  });

  // Manipulação de menu mobile usando jQuery
  $(document).ready(function () {
    $("#menu-button").on("click", function () {
      // Check if the menu is hidden
      if ($("#mobile-menu").is(":hidden")) {
        // Show the menu with a slide down animation and fade in
        $("#mobile-menu")
          .removeClass("hidden")
          .hide()
          .slideDown(500)
          .css({ opacity: 0 })
          .animate({ opacity: 1 }, 500);
      } else {
        // Hide the menu with a slide up animation and fade out
        $("#mobile-menu").animate({ opacity: 0 }, 500, function () {
          $(this).slideUp(500, function () {
            $(this).addClass("hidden");
          });
        });
      }
    });
  });
});
