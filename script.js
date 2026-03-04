// Typing Animation - Perfectly Smooth
const words = ["Python Developer", "Data Scientist", "Data Analyst", "ML Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing');

function typeWriter() {
  const currentWord = words[wordIndex];
  
  if (!isDeleting && charIndex <= currentWord.length) {
    typingElement.textContent = currentWord.substring(0, charIndex);
    charIndex++;
    setTimeout(typeWriter, 80);
  } else if (isDeleting && charIndex > 0) {
    typingElement.textContent = currentWord.substring(0, charIndex);
    charIndex--;
    setTimeout(typeWriter, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeWriter, 1500);
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeWriter, 500);
    }
  }
}

// Start typing animation
typingElement.textContent = '';
typeWriter();

// Mobile Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Smooth scrolling for anchor links
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

// Parallax effect for floating backgrounds
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const circles = document.querySelectorAll('.bg-circle');
  circles[0].style.transform = `translateY(${scrolled * 0.3}px)`;
  circles[1].style.transform = `translateY(${scrolled * -0.2}px)`;
  circles[2].style.transform = `translateY(${scrolled * 0.4}px)`;
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections for smooth fade-in
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.8s ease';
  observer.observe(section);
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const navbar = document.querySelector('.navbar');
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScroll = currentScroll;
});
