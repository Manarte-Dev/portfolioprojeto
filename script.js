document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const overlay = document.querySelector('.overlay');
  const btnTopo = document.getElementById('btnTopo');

  const fecharMenu = () => {
    nav.classList.remove('show');
    overlay.classList.remove('show');
  };

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    overlay.classList.toggle('show');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', fecharMenu);
  });

  overlay.addEventListener('click', fecharMenu);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) btnTopo.classList.add('show');
    else btnTopo.classList.remove('show');
  });

  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
