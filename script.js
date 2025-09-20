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

// Track Calendly clicks - Supprimé car plus de liens Calendly

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

// Test de la configuration EmailJS
console.log('🔧 Configuration EmailJS:');
console.log('- Service ID: service_lb38ewo');
console.log('- Template ID: template_2af96ws');
console.log('- User ID: ZJMuCYNkzxGhqore6');
console.log('- Email de destination: klyonme@gmail.com');

// Fonction de test EmailJS (à appeler depuis la console)
window.testEmailJS = function() {
    console.log('🧪 Test EmailJS en cours...');
    console.log('📋 Configuration actuelle:');
    console.log('- Service ID: service_lb38ewo');
    console.log('- Template ID: template_2af96ws');
    console.log('- User ID: ZJMuCYNkzxGhqore6');
    
    emailjs.send('service_lb38ewo', 'template_2af96ws', {
        from_name: 'Test Klyon',
        from_email: 'test@klyon.fr',
        from_phone: '07 66 98 03 42',
        service_type: 'Test',
        message: 'Ceci est un test du formulaire de contact Klyon',
        to_email: 'klyonme@gmail.com'
    })
    .then(function(response) {
        console.log('✅ Test EmailJS réussi!', response);
        console.log('📧 Status:', response.status);
        console.log('📧 Text:', response.text);
        alert('Test EmailJS réussi! Vérifiez votre boîte mail (et le dossier spam).');
    })
    .catch(function(error) {
        console.log('❌ Test EmailJS échoué:', error);
        console.log('🔍 Détails de l\'erreur:', {
            status: error.status,
            text: error.text,
            message: error.message
        });
        alert('Test EmailJS échoué. Vérifiez la console pour plus de détails.');
    });
};

// Fonction de test alternative avec configuration différente
window.testEmailJSAlternative = function() {
    console.log('🧪 Test EmailJS alternatif en cours...');
    
    // Test avec un template plus simple
    emailjs.send('service_lb38ewo', 'template_2af96ws', {
        from_name: 'Test Simple',
        message: 'Test simple du formulaire'
    })
    .then(function(response) {
        console.log('✅ Test alternatif réussi!', response);
        alert('Test alternatif réussi!');
    })
    .catch(function(error) {
        console.log('❌ Test alternatif échoué:', error);
        alert('Test alternatif échoué: ' + error.text);
    });
};

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
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .project-card, .hero-content, .hero-visual, .competence-category, .competence-item, .positioning-item');
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
});

// Animations spéciales pour la section compétences
const competenceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            if (element.classList.contains('competence-category')) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                
                // Animation en cascade pour les items de compétences
                const competenceItems = element.querySelectorAll('.competence-item');
                competenceItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                        item.classList.add('animate-competence-item');
                    }, index * 100);
                });
            }
            
            if (element.classList.contains('positioning-item')) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
                element.classList.add('animate-positioning-item');
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observer les éléments de compétences
document.addEventListener('DOMContentLoaded', () => {
    const competenceCategories = document.querySelectorAll('.competence-category');
    const positioningItems = document.querySelectorAll('.positioning-item');
    
    competenceCategories.forEach(category => {
        // Initialiser l'état des catégories
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Initialiser l'état des items
        const items = category.querySelectorAll('.competence-item');
        items.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        competenceObserver.observe(category);
    });
    
    positioningItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px) scale(0.95)';
        item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        competenceObserver.observe(item);
    });
});

// Effets de survol avancés pour les compétences
document.addEventListener('DOMContentLoaded', () => {
    const competenceItems = document.querySelectorAll('.competence-item');
    
    competenceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(37, 99, 235, 0.15)';
            
            // Animation des icônes
            const icon = this.querySelector('.competence-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(-10deg)';
            }
            
            // Animation des tech-tags
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'translateY(-3px) scale(1.05)';
                }, index * 50);
            });
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            
            const icon = this.querySelector('.competence-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
            
            const techTags = this.querySelectorAll('.tech-tag');
            techTags.forEach(tag => {
                tag.style.transform = 'translateY(0) scale(1)';
            });
        });
    });
    
    // Effets spéciaux pour les catégories
    const competenceCategories = document.querySelectorAll('.competence-category');
    
    competenceCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
            
            // Animation de l'icône de catégorie
            const categoryIcon = this.querySelector('.category-icon');
            if (categoryIcon) {
                categoryIcon.style.transform = 'scale(1.15) rotate(8deg)';
                categoryIcon.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.3)';
            }
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            
            const categoryIcon = this.querySelector('.category-icon');
            if (categoryIcon) {
                categoryIcon.style.transform = 'scale(1) rotate(0deg)';
                categoryIcon.style.boxShadow = '';
            }
        });
    });
});

// Animation de compteur pour les tech-tags
function animateTechTags() {
    const techTags = document.querySelectorAll('.tech-tag');
    
    techTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px) scale(0.8)';
        
        setTimeout(() => {
            tag.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0) scale(1)';
        }, index * 100);
    });
}

// Animation de pulsation pour les icônes importantes
function addPulseAnimation() {
    const importantIcons = document.querySelectorAll('.competence-icon');
    
    importantIcons.forEach((icon, index) => {
        if (index % 3 === 0) { // Tous les 3 éléments
            icon.style.animation = 'pulse 2s infinite';
            icon.style.animationDelay = `${index * 0.5}s`;
        }
    });
}

// Effet de parallaxe pour la section compétences
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const competencesSection = document.querySelector('.competences');
    
    if (competencesSection) {
        const rect = competencesSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const competenceCategories = competencesSection.querySelectorAll('.competence-category');
            competenceCategories.forEach((category, index) => {
                const speed = 0.1 + (index * 0.05);
                category.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }
    }
});

// Animation de typewriter pour le titre de positionnement
function typewriterEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialiser les animations au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Délai pour laisser le temps au CSS de se charger
    setTimeout(() => {
        addPulseAnimation();
        
        // Animation de typewriter pour le titre de positionnement
        const positioningTitle = document.querySelector('.positioning-content h3');
        if (positioningTitle) {
            const originalText = positioningTitle.textContent;
            typewriterEffect(positioningTitle, originalText, 80);
        }
    }, 1000);
});

// Formulaire de contact avec EmailJS
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        // Afficher l'état de chargement
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        submitBtn.disabled = true;
        
        // Récupérer les données du formulaire
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };
        
        // Google Analytics - Track form submission
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                'event_category': 'engagement',
                'event_label': 'contact_form',
                'service_type': formData.service
            });
        }
        
        // Log des données pour débogage
        console.log('📧 Envoi EmailJS avec les données:', {
            service_id: 'service_lb38ewo',
            template_id: 'template_2af96ws',
            user_id: 'ZJMuCYNkzxGhqore6',
            data: {
                from_name: formData.name,
                from_email: formData.email,
                from_phone: formData.phone,
                service_type: formData.service,
                message: formData.message,
                to_email: 'klyonme@gmail.com' // Email de destination
            }
        });
        
        // Envoyer l'email via EmailJS
        emailjs.send('service_lb38ewo', 'template_2af96ws', {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            service_type: formData.service,
            message: formData.message,
            to_email: 'klyonme@gmail.com'
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showNotification('Message envoyé avec succès !', 'success');
            contactForm.reset();
            
            // Google Analytics - Track successful submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_success', {
                    'event_category': 'engagement',
                    'event_label': 'contact_form'
                });
            }
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            showNotification('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
            
            // Google Analytics - Track failed submission
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_error', {
                    'event_category': 'engagement',
                    'event_label': 'contact_form'
                });
            }
        })
        .finally(function() {
            // Réinitialiser l'état du bouton
            btnText.style.display = 'inline-block';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        });
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