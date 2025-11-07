// ====== ANIMACIÓN AL HACER SCROLL ======
const elements = document.querySelectorAll('.fade-up');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

// Ejecutar al cargar y al hacer scroll
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
// Permite girar las tarjetas en móviles y escritorio
document.querySelectorAll('.integrante').forEach(card => {
  card.addEventListener('click', () => {
    // Cierra cualquier otra tarjeta abierta
    document.querySelectorAll('.integrante').forEach(c => {
      if (c !== card) c.classList.remove('activo');
    });
    // Alterna el estado de la tarjeta tocada
    card.classList.toggle('activo');
  });
});
// Interactividad para fundadores (funciona en móviles y PC)
document.querySelectorAll('.fundador').forEach(card => {
  card.addEventListener('click', () => {
    // Cierra otras tarjetas abiertas
    document.querySelectorAll('.fundador').forEach(c => {
      if (c !== card) c.classList.remove('activo');
    });
    // Alterna el estado de la tarjeta seleccionada
    card.classList.toggle('activo');
  });
});
// Interactividad para tarjetas de programas
document.querySelectorAll('.program-card').forEach(card => {
  card.addEventListener('click', () => {
    // Cierra las demás
    document.querySelectorAll('.program-card').forEach(c => {
      if (c !== card) c.classList.remove('activo');
    });
    // Alterna la actual
    card.classList.toggle('activo');
  });
});
