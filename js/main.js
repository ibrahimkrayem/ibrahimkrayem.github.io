document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.menu a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      sections.forEach(sec => sec.classList.toggle('active', sec.id === id));
      links.forEach(l => l.classList.toggle('active', l === link));
    });
  });
  // Activer #accueil au chargement
  document.querySelector('a[href="#accueil"]').classList.add('active');
});