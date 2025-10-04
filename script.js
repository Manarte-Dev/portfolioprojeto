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
  if (window.scrollY > 300) {
    btnTopo.classList.add('show');
  } else {
    btnTopo.classList.remove('show');
  }
});
btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Previsão do tempo 

const weatherWidget = document.querySelector('#weatherWidget');

// Capturar localização

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(async (pos) =>{
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;

  // chave api

  const apiKey = 'bd2edff2e859a2079483d141048b1fa2';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`

  try {
    const res = await fetch(url);
    const data = await res.json();
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    const city = data.name;

    weatherWidget.textContent = `${temp} °C - ${desc} ${city}`;
    weatherWidget.classList.add('show');
  }    catch (err) {
    weatherWidget.textContent = `Não foi possivel obter dados`
  }
}, () => {
  weatherWidget.textContent = `Ative sua localização`;
});
} else {
  weatherWidget.textContent = `Geolocalização não suportada`;
}