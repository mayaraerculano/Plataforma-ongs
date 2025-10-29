// js/validation.js
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", e => {
      const camposInvalidos = [];

      form.querySelectorAll("input[required], textarea[required]").forEach(campo => {
        if (!campo.value.trim()) {
          camposInvalidos.push(campo.name);
          campo.classList.add("erro");
        } else {
          campo.classList.remove("erro");
        }
      });

      if (camposInvalidos.length > 0) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos obrigatórios!");
      }
    });
  });
});