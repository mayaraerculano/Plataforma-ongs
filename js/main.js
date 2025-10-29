// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Plataforma ONGs carregada com sucesso!");

  // 🌙 Alternar modo escuro
  const toggleBtn = document.querySelector("#modo-escuro");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // 🎨 Inicializa validações
  import("./validation.js").then(module => {
    module.initValidation();
  });
});
// Interatividade dos botões "Saiba mais"
document.querySelectorAll(".btn-saiba").forEach((botao) => {
  botao.addEventListener("click", () => {
    const detalhes = botao.nextElementSibling;
    detalhes.classList.toggle("mostrar");
    botao.textContent = detalhes.classList.contains("mostrar")
      ? "Fechar"
      : "Saiba mais";
  });
})
