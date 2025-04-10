document.addEventListener("DOMContentLoaded", function () {
    // Função Typewriter para o nome digitado dinamicamente
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
  