/* ═══════════════════════════════════════════════════════════════
   GadoX — main.js
   Responsabilidades:
     - Navbar scroll (adiciona classe .scrolled)
     - Animações fade-up via IntersectionObserver
════════════════════════════════════════════════════════════════ */

// ── Navbar: adiciona fundo ao rolar ──────────────────────────
const nav = document.getElementById('nav')

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40)
})


// ── Fade-up: anima elementos ao entrarem na viewport ─────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  },
  { threshold: 0.1 }
)

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
