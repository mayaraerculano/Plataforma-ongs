export function initSPA() {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  links.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (href && href.endsWith(".html")) {
        e.preventDefault();
        fetch(href)
          .then(resp => resp.text())
          .then(html => {
            const temp = document.createElement("div");
            temp.innerHTML = html;
            const newMain = temp.querySelector("main");
            if (newMain) main.innerHTML = newMain.innerHTML;
            window.history.pushState({}, "", href);
          });
      }
    });
  });
}