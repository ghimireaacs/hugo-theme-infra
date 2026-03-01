// Progress bar on scroll
const progress = document.getElementById('progress');
if (progress) {
  window.addEventListener('scroll', () => {
    const main = document.getElementById('main') || document.documentElement;
    const scrollTop = main.scrollTop || window.scrollY;
    const height = main.scrollHeight - main.clientHeight;
    const pct = height > 0 ? (scrollTop / height) * 100 : 0;
    progress.style.width = pct + '%';
  }, { passive: true });

  // Also listen to main div scroll
  const main = document.getElementById('main');
  if (main) {
    main.addEventListener('scroll', () => {
      const pct = (main.scrollTop / (main.scrollHeight - main.clientHeight)) * 100;
      progress.style.width = pct + '%';
    }, { passive: true });
  }
}

// Mark current nav item active
const currentPath = window.location.pathname.replace(/\/$/, '');
document.querySelectorAll('.nav-item').forEach(item => {
  const href = item.getAttribute('href')?.replace(/\/$/, '');
  if (href === currentPath) {
    item.classList.add('active');
  }
});
