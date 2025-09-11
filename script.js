document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle'); // botão ☰
  const nav = document.querySelector('.nav');             // menu drawer
  const overlay = document.querySelector('.overlay');     // fundo escuro

  // Função para abrir/fechar menu
  const toggleMenu = () => {
    nav.classList.toggle('show');       // abre/fecha drawer
    overlay.classList.toggle('show');   // mostra/esconde overlay
  };

  // Clicar no botão abre/fecha menu
  toggle.addEventListener('click', toggleMenu);

  // Clicar em qualquer link dentro do menu fecha o menu
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      overlay.classList.remove('show');
    });
  });

  // Clicar no overlay fecha o menu
  overlay.addEventListener('click', () => {
    nav.classList.remove('show');
    overlay.classList.remove('show');
  });
});
