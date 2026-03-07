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


document.addEventListener('DOMContentLoaded', () => {
  // Global Realistic Download Button Animation
  document.querySelectorAll('.nav-download-btn, .download-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (this.classList.contains('downloading') || this.classList.contains('download-done')) {
        return;
      }
      
      const originalText = this.querySelector('.btn-label') ? this.querySelector('.btn-label').innerText : 'Download';
      const icon = this.querySelector('i');
      const label = this.querySelector('.btn-label');
      
      this.classList.add('downloading');
      if (label) label.innerText = 'Downloading...';
      if (icon) {
        icon.className = 'fas fa-arrow-down';
      }

      // Restore and show completion after animation time
      setTimeout(() => {
        this.classList.remove('downloading');
        this.classList.add('download-done');
        if (label) label.innerText = 'Downloaded!';
        if (icon) icon.className = 'fas fa-check';
        
        // Reset after a while
        setTimeout(() => {
          this.classList.remove('download-done');
          if (label) label.innerText = originalText;
          if (icon) icon.className = 'fas fa-download';
        }, 3000);
      }, 1800);
      
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Global Realistic Download Button Animation
  document.querySelectorAll('.nav-download-btn, .download-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (this.classList.contains('downloading') || this.classList.contains('download-done')) {
        return;
      }
      
      const originalText = this.querySelector('.btn-label') ? this.querySelector('.btn-label').innerText : 'Download';
      const icon = this.querySelector('i');
      const label = this.querySelector('.btn-label');
      
      this.classList.add('downloading');
      if (label) label.innerText = 'Downloading...';
      if (icon) {
        icon.className = 'fas fa-arrow-down';
      }

      // Restore and show completion after animation time
      setTimeout(() => {
        this.classList.remove('downloading');
        this.classList.add('download-done');
        if (label) label.innerText = 'Downloaded!';
        if (icon) icon.className = 'fas fa-check';
        
        // Reset after a while
        setTimeout(() => {
          this.classList.remove('download-done');
          if (label) label.innerText = originalText;
          if (icon) icon.className = 'fas fa-download';
        }, 3000);
      }, 1800);
      
    });
  });
});
