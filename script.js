// ================= MENU MOBILE =================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.nav a');
const header = document.querySelector('.header');

// Efeito de scroll no header
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Abrir/Fechar menu
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  overlay.classList.toggle('show');
  menuToggle.classList.toggle('active');
  document.body.style.overflow = nav.classList.contains('show') ? 'hidden' : '';
  
  // Adicionar vibração no mobile (se disponível)
  if ('vibrate' in navigator) {
    navigator.vibrate(50);
  }
});

// Fechar menu ao clicar no overlay
overlay.addEventListener('click', () => {
  nav.classList.remove('show');
  overlay.classList.remove('show');
  menuToggle.classList.remove('active');
  document.body.style.overflow = '';
});

// Fechar menu ao clicar em um link (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove('show');
      overlay.classList.remove('show');
      menuToggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// ================= BOTÃO VOLTAR AO TOPO =================
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

// ================= PREVISÃO DO TEMPO =================
const weatherWidget = document.querySelector('#weatherWidget');

// Ícones de clima
const weatherIcons = {
  '01d': '☀️', '01n': '🌙',
  '02d': '⛅', '02n': '☁️',
  '03d': '☁️', '03n': '☁️',
  '04d': '☁️', '04n': '☁️',
  '09d': '🌧️', '09n': '🌧️',
  '10d': '🌦️', '10n': '🌧️',
  '11d': '⛈️', '11n': '⛈️',
  '13d': '❄️', '13n': '❄️',
  '50d': '🌫️', '50n': '🌫️'
};

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      // Chave API OpenWeatherMap
      const apiKey = 'bd2edff2e859a2079483d141048b1fa2';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;

      try {
        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error('Erro ao buscar dados');
        }
        
        const data = await res.json();
        const temp = Math.round(data.main.temp);
        const desc = data.weather[0].description;
        const city = data.name;
        const icon = weatherIcons[data.weather[0].icon] || '🌡️';

        weatherWidget.innerHTML = `
          <span style="font-size: 18px;">${icon}</span>
          ${temp}°C - ${desc.charAt(0).toUpperCase() + desc.slice(1)}
          <span style="opacity: 0.7; font-size: 12px;">| ${city}</span>
        `;
        weatherWidget.classList.add('show');
      } catch (err) {
        console.error('Erro ao buscar clima:', err);
        weatherWidget.textContent = '🌡️ Clima indisponível';
      }
    },
    (err) => {
      console.error('Erro de geolocalização:', err);
      weatherWidget.textContent = '📍 Ative sua localização';
    },
    {
      timeout: 10000,
      maximumAge: 300000 // Cache de 5 minutos
    }
  );
} else {
  weatherWidget.textContent = '🌐 Geolocalização não suportada';
}

// ================= ANIMAÇÕES DE SCROLL =================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar cards de projetos
document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});

// ================= SMOOTH SCROLL PARA LINKS INTERNOS =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener("scroll", function () {
  const btn = document.querySelector(".btn-topo");
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});
