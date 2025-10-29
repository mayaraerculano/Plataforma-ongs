export function initValidation() {
  console.log("Validação inicializada.");

  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const inputs = form.querySelectorAll("input, textarea, select");
      let valid = true;

      inputs.forEach(input => {
        input.classList.remove("erro");

        if (!input.checkValidity()) {
          input.classList.add("erro");
          valid = false;
        }
      });

      const msgDiv = form.parentElement.querySelector(".alert");
      if (msgDiv) {
        if (!valid) {
          msgDiv.className = "alert alert-error";
          msgDiv.textContent = "Por favor, preencha todos os campos corretamente.";
          msgDiv.style.display = "block";
        } else {
          msgDiv.className = "alert alert-success";
          msgDiv.textContent = "Formulário enviado com sucesso!";
          msgDiv.style.display = "block";

          form.reset();
        }
      }
    });
  });
}