// ============ MENU HAMBURGER ============
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Ferme le menu quand on clique sur un lien
document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.remove("open");
    icon.classList.remove("open");
  });
});

// ============ GLOW NAV AU SCROLL ============
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    if (window.pageYOffset > 100) {
      nav.style.boxShadow = '0 8px 40px rgba(255, 105, 180, 0.3)';
    } else {
      nav.style.boxShadow = '0 4px 30px rgba(255, 105, 180, 0.1)';
    }
  }
});
