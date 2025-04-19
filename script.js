// Theme toggle
const toggleBtn = document.querySelector('.toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Save preference
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});

// Optional: fade-in elements on scroll
const faders = document.querySelectorAll('section');

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function(
  entries, appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

document.querySelector('.navbar').style.display = 'flex';