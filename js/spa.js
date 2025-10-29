// js/spa.js
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const mainContent = document.querySelector("main");

  async function carregarPagina(url) {
    try {
      const resposta = await fetch(url);
      const texto = await resposta.text();
      mainContent.innerHTML = texto;
      window.scrollTo(0, 0);
    } catch (erro) {
      mainContent.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
      console.error(erro);
    }
  }

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const url = link.getAttribute("href");
      carregarPagina(url);
      history.pushState({ url }, "", url);
    });
  });

  window.addEventListener("popstate", e => {
    if (e.state && e.state.url) carregarPagina(e.state.url);
  });
});