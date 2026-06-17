// Theme JavaScript

// Initialize theme
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
});

function initializeTheme() {
  setupEventListeners();
  setupScrollAnimations();
  setupAnimations();
}

// Setup Event Listeners
function setupEventListeners() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.getElementById('navMenu');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Smooth scroll links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        if (navMenu) navMenu.classList.remove('active');
      }
    });
  });
}

// Setup Scroll Animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.5s ease-out';
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.product-card, .review-card, .pricing-card').forEach(el => {
    observer.observe(el);
  });
}

// Setup Animations
function setupAnimations() {
  // Add any custom animations here
}

// Add to cart
function addToCart(variantId) {
  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [
        {
          id: variantId,
          quantity: 1
        }
      ]
    })
  })
  .then(response => response.json())
  .then(data => {
    window.location.href = '/cart';
  })
  .catch(error => console.error('Error:', error));
}

// Newsletter signup
function subscribeNewsletter(email) {
  fetch('/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'contact[email]=' + encodeURIComponent(email) + '&form_type=customer'
  })
  .then(() => {
    alert('Thank you for subscribing!');
  })
  .catch(error => console.error('Error:', error));
}

// Export functions for global use
window.ThemeUtils = {
  addToCart,
  subscribeNewsletter
};