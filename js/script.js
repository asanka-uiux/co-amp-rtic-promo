/**
 * AMP RTIC Cooler Promo Page - Interactive Features
 * Organized for mobile-first functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile menu toggle (if needed)
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('.navlinks');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Add active state to nav links
  const navLinks = document.querySelectorAll('.navlinks a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      if (navMenu && navToggle) {
        navMenu.classList.remove('active');
      }
    });
  });

  // Button click tracking (optional analytics)
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Add any custom tracking or behavior here
      console.log('Button clicked:', this.textContent);
    });
  });
});

// Intersection Observer for lazy animation on scroll
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
}
