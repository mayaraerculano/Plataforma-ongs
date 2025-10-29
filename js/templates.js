// js/templates.js
const Templates = {
  projeto: (titulo, descricao) => `
    <div class="projeto-card">
      <h3>${titulo}</h3>
      <p>${descricao}</p>
    </div>
  `,

  voluntario: (nome, area) => `
    <div class="voluntario-card">
      <h4>${nome}</h4>
      <p>Área de atuação: ${area}</p>
    </div>
  `
};

// Exemplo de uso (renderização dinâmica)
document.addEventListener("DOMContentLoaded", () => {
  const listaProjetos = document.querySelector("#lista-projetos");
  if (listaProjetos) {
    listaProjetos.innerHTML =
      Templates.projeto("Cuidar é Amar", "Projeto de apoio a animais abandonados") +
      Templates.projeto("Sementes do Futuro", "Educação infantil em comunidades carentes");
  }
});