/* ===============================
   MAIN.JS — Interatividade Básica
================================ */

/**
 * Função para alternar o menu no modo mobile
 */
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

/**
 * Rolagem suave ao clicar nos links do menu
 */
const menuLinks = document.querySelectorAll('nav ul li a[href^="#"]');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth'
      });
    }

    // Fecha o menu após clicar em um link no modo mobile
    nav.classList.remove('active');
  });
});

/**
 * Animação simples de feedback nos botões
 */
const buttons = document.querySelectorAll('button, .btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('clicked');
    setTimeout(() => btn.classList.remove('clicked'), 200);
  });
});

/**
 * Feedback de formulário (simulação)
 * Exibe uma mensagem de sucesso e limpa os campos
 */
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Exibe mensagem de sucesso
    const successMsg = document.createElement('div');
    successMsg.className = 'alert alert-success';
    successMsg.textContent = '✅ Formulário enviado com sucesso!';
    form.prepend(successMsg);

    // Limpa os campos
    form.reset();

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
      successMsg.remove();
    }, 3000);
  });
});

/**
 * Efeito visual de clique no botão (CSS via classe)
 */
const style = document.createElement('style');
style.textContent = `
  .clicked {
    transform: scale(0.96);
    transition: transform 0.1s ease;
  }
`;
document.head.appendChild(style);

