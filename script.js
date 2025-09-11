document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.overlay');

  const toggleMenu = () => {
    nav.classList.toggle('show');
    overlay.classList.toggle('show');
    toggle.style.display = nav.classList.contains('show') ? 'none' : 'block';
  };

  toggle.addEventListener('click', toggleMenu);

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      overlay.classList.remove('show');
      toggle.style.display = 'block';
    });
  });

  overlay.addEventListener('click', () => {
    nav.classList.remove('show');
    overlay.classList.remove('show');
    toggle.style.display = 'block';
  });
});
