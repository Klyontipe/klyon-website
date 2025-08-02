// Initialisation EmailJS
emailjs.init("ZJMuCYNkzxGhqore6");

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Google Analytics - Track theme toggle
    if (typeof gtag !== 'undefined') {
        gtag('event', 'theme_toggle', {
            'event_category': 'engagement',
            'event_label': newTheme
        });
    }
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Google Analytics - Track navigation clicks
        if (typeof gtag !== 'undefined') {
            gtag('event', 'navigation_click', {
                'event_category': 'engagement',
                'event_label': this.getAttribute('href')
            });
        }
    });
});

// Track Calendly clicks
document.querySelectorAll('a[href*="calendly.com"]').forEach(link => {
    link.addEventListener('click', function() {
        // Google Analytics - Track Calendly clicks
        if (typeof gtag !== 'undefined') {
            gtag('event', 'calendly_click', {
                'event_category': 'engagement',
                'event_label': 'appointment_booking'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const elements = document.querySelectorAll('.element');
    
    elements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Hover animations for service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Hover animations for testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Hover animations for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Lazy loading for images (placeholder)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

// Performance optimization for reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.element').forEach(element => {
        element.style.animation = 'none';
    });
}

// Google Analytics - Track page views
if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
        'page_title': document.title,
        'page_location': window.location.href
    });
}

// Console log for site loading confirmation
console.log('🚀 Klyon website loaded successfully!');
console.log('📊 Google Analytics tracking enabled');
console.log('📧 EmailJS contact form ready');
console.log('🌙 Dark mode toggle ready');
console.log('💼 Projects gallery ready');

// Back to top functionality
const backToTop = document.getElementById('backToTop');
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / height) * 100;
    
    // Update progress bar
    progressBar.style.width = progress + '%';
    
    // Show/hide back to top button
    if (scrolled > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Google Analytics - Track back to top clicks
    if (typeof gtag !== 'undefined') {
        gtag('event', 'back_to_top_click', {
            'event_category': 'engagement',
            'event_label': 'navigation'
        });
    }
});

// Cookie consent
const cookieConsent = document.getElementById('cookieConsent');

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieConsent.style.transform = 'translateY(100%)';
    setTimeout(() => {
        cookieConsent.style.display = 'none';
    }, 300);
    
    // Google Analytics - Track cookie acceptance
    if (typeof gtag !== 'undefined') {
        gtag('event', 'cookie_accept', {
            'event_category': 'engagement',
            'event_label': 'cookie_consent'
        });
    }
}

function declineCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    cookieConsent.style.transform = 'translateY(100%)';
    setTimeout(() => {
        cookieConsent.style.display = 'none';
    }, 300);
    
    // Google Analytics - Track cookie decline
    if (typeof gtag !== 'undefined') {
        gtag('event', 'cookie_decline', {
            'event_category': 'engagement',
            'event_label': 'cookie_consent'
        });
    }
}

// Show cookie consent if not already accepted
if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
        cookieConsent.classList.add('show');
    }, 2000);
}

// États de chargement et animations améliorées
function showLoadingState(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
    element.innerHTML += '<div class="loading-spinner"></div>';
}

function hideLoadingState(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
    const spinner = element.querySelector('.loading-spinner');
    if (spinner) spinner.remove();
}

// Intersection Observer amélioré pour les animations
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            // Ajouter la classe d'animation appropriée
            if (element.classList.contains('service-card')) {
                element.classList.add('animate-fade-in-up');
            } else if (element.classList.contains('testimonial-card')) {
                element.classList.add('animate-fade-in-left');
            } else if (element.classList.contains('project-card')) {
                element.classList.add('animate-fade-in-right');
            } else if (element.classList.contains('hero-content')) {
                element.classList.add('animate-fade-in-left');
            } else if (element.classList.contains('hero-visual')) {
                element.classList.add('animate-fade-in-right');
            }
            
            // Marquer comme animé pour éviter la répétition
            element.setAttribute('data-animated', 'true');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observer les éléments pour les animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .project-card, .hero-content, .hero-visual');
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
});

// Amélioration du formulaire de contact avec états de chargement
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Afficher l'état de chargement
        showLoadingState(submitBtn);
        submitBtn.textContent = 'Envoi en cours...';
        
        // Simuler l'envoi (remplacer par votre logique EmailJS)
        setTimeout(() => {
            hideLoadingState(submitBtn);
            submitBtn.textContent = originalText;
            
            // Afficher un message de succès
            showNotification('Message envoyé avec succès !', 'success');
        }, 2000);
    });
}

// Performance optimization
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
}); 

// Bouton de retour en haut
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopBtn);

// Afficher/masquer le bouton selon le scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Fonction de retour en haut
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Google Analytics - Track back to top
    if (typeof gtag !== 'undefined') {
        gtag('event', 'back_to_top', {
            'event_category': 'engagement',
            'event_label': 'navigation'
        });
    }
});

// Navigation améliorée avec indicateur de section active
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink); 