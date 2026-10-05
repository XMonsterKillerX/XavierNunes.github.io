document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Current Year in Footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking on any nav link
    document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 3. Project Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Click-to-Copy Email Action
  const copyBtn = document.getElementById('copyBtn');
  const emailInput = document.getElementById('emailInput');
  const copyFeedback = document.getElementById('copyFeedback');

  if (copyBtn && emailInput && copyFeedback) {
    copyBtn.addEventListener('click', () => {
      emailInput.select();
      emailInput.setSelectionRange(0, 99999); // Mobile compatibility

      navigator.clipboard.writeText(emailInput.value).then(() => {
        copyFeedback.classList.add('show');
        copyBtn.textContent = 'Copied!';
        
        setTimeout(() => {
          copyFeedback.classList.remove('show');
          copyBtn.textContent = 'Copy Email';
        }, 2500);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }

  // 5. Navbar Shadow on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.borderBottomColor = 'rgba(88, 166, 255, 0.2)';
    } else {
      navbar.style.borderBottomColor = 'var(--border-color)';
    }
  });
});