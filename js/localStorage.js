document.addEventListener("submit", function(e){
  if(e.target.id === "form-voluntario"){
    e.preventDefault();
    const nome = e.target.querySelector("input[type=text]").value;
    const email = e.target.querySelector("input[type=email]").value;
    const area = e.target.querySelector("select").value;

    let voluntarios = JSON.parse(localStorage.getItem("voluntarios") || "[]");
    voluntarios.push({nome, email, area});
    localStorage.setItem("voluntarios", JSON.stringify(voluntarios));
    alert("Voluntário cadastrado com sucesso!");
    e.target.reset();
  }
});
