// ==============================
// js/main.js
// ==============================

// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log("🌿 Plataforma ONGs carregada com sucesso!");

  // ====== Alternância de modo escuro/claro ======
  const toggleBtn = document.querySelector("#modo-escuro");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Salva a preferência no localStorage
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "escuro");
      } else {
        localStorage.setItem("tema", "claro");
      }
    });
  }

  // ====== Recupera o tema salvo ======
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    document.body.classList.add("dark-mode");
  }

  // ====== Exemplo: mensagem de carregamento ======
  const header = document.querySelector("header h1");
  if (header) {
    header.title = "Bem-vindo(a) à Plataforma de ONGs 🌱";
  }

  // ====== Feedback inicial ======
  const alerta = document.createElement("div");
  alerta.className = "alerta";
  alerta.textContent = "Bem-vindo(a)! Explore os projetos e apoie uma causa.";
  alerta.style.background = "#c9a227";
  alerta.style.color = "#1b1b1b";
  alerta.style.padding = "10px";
  alerta.style.textAlign = "center";
  alerta.style.fontWeight = "600";

  document.body.prepend(alerta);
  setTimeout(() => alerta.remove(), 4000);
});

// ==============================
// Importação dos módulos
// ==============================

// ⚠️ Certifique-se de que esses arquivos existam:
// js/spa.js, js/templates.js e js/validation.js
import "./spa.js";
import "./templates.js";
import "./validation.js";

