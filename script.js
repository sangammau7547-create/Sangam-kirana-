// Category filter
const tabs = document.querySelectorAll('.tab');
const products = document.querySelectorAll('.product-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const category = tab.dataset.category;

    products.forEach(product => {
      if (category === 'all' || product.dataset.category === category) {
        product.style.display = 'block';
        setTimeout(() => product.classList.add('visible'), 50);
      } else {
        product.style.display = 'none';
        product.classList.remove('visible');
      }
    });
  });
});

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Scroll animations (Intersection Observer)
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe product cards & gallery items
document.querySelectorAll('.product-card, .gallery-item').forEach(el => {
  observer.observe(el);
});

// Make all products visible on load (for "All" tab)
window.addEventListener('load', () => {
  products.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, index * 80);
  });
});