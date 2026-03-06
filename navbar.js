document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

  if (!mobileMenuBtn || !mobileMenu) return;

  const icon = mobileMenuBtn.querySelector('i');

  function openMenu() {
    mobileMenu.classList.add('active');
    if (mobileMenuOverlay) mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (icon) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  }

  mobileMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (mobileMenu.classList.contains('active')) closeMenu();
    else openMenu();
  });

  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);
  if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  // Close on drawer link click
  document.querySelectorAll('.mobile-nav a').forEach((link) => {
    link.addEventListener('click', () => setTimeout(closeMenu, 150));
  });
});
