// MENU MOBILE
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('show');
  overlay.classList.remove('show');
});

// BOTÃO TOPO
const btnTopo = document.getElementById('btnTopo');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    btnTopo.classList.add('show');
  } else {
    btnTopo.classList.remove('show');
  }
});
btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
