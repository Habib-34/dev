// Smooth scrolling and navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbar = document.querySelector('.navbar');
            const offset = navbar.offsetHeight + 20;
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update active nav link
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Update active navigation on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';
    const scrollY = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Download CV functionality
document.getElementById('downloadCV').addEventListener('click', function (e) {
    e.preventDefault();

    // Show alert for now - replace with actual CV download
    alert('CV download functionality is ready! Please add your CV file and update the download link in the JavaScript code.');

    /* 
    // Uncomment and update this section when you have your CV ready:
    const cvUrl = './path-to-your-cv.pdf'; // Update with your CV file path
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Muhammad_Habib_Ullah_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    */
});

// Download CV functionality for navbar button
document.getElementById('navDownloadCV').addEventListener('click', function (e) {
    e.preventDefault();

    // Show alert for now - replace with actual CV download
    alert('CV download functionality is ready! Please add your CV file and update the download link in the JavaScript code.');

    /* 
    // Uncomment and update this section when you have your CV ready:
    const cvUrl = './path-to-your-cv.pdf'; // Update with your CV file path
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Muhammad_Habib_Ullah_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    */
});

// Hero name displays normally without typing animation

// Add parallax effect to hero background
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
});

// Animate stats on scroll
const animateValue = (element, start, end, duration, originalText) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);

        // Use the original text format to determine suffix
        if (originalText.includes('+')) {
            element.innerHTML = value + '+';
        } else if (originalText.includes('%')) {
            element.innerHTML = value + '%';
        } else {
            element.innerHTML = value;
        }

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Observe stats for animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const originalValue = statNumber.textContent;
            const numValue = parseInt(originalValue.replace(/\D/g, ''));
            animateValue(statNumber, 0, numValue, 2000, originalValue);
            statsObserver.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Add smooth reveal animation for skills with stagger
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach((category, index) => {
    category.style.animationDelay = `${index * 0.2}s`;
});

// Style changing functionality
function changeStyle(styleName) {
    const heroImage = document.getElementById('heroImageContainer');
    const buttons = document.querySelectorAll('[onclick^="changeStyle"]');

    // Remove all style classes
    heroImage.className = 'hero-image ' + styleName;

    // Update button styles
    buttons.forEach(btn => {
        btn.style.background = 'var(--bg-secondary)';
        btn.style.color = 'var(--text-primary)';
        btn.style.border = '1px solid var(--border-color)';
    });

    // Highlight active button
    event.target.style.background = 'var(--primary-color)';
    event.target.style.color = 'white';
    event.target.style.border = 'none';

    console.log('Changed to ' + styleName);
}

// Cursor Follower Effect
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth follower animation
function animateCursor() {
    // Easing effect for smooth following
    const speed = 0.15;
    followerX += (mouseX - followerX) * speed;
    followerY += (mouseY - followerY) * speed;

    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animateCursor);
}

// Start cursor animation
if (cursorFollower) {
    animateCursor();
}

// Add hover effects for interactive elements
const hoverElements = document.querySelectorAll('a, button, .btn, .project-card, .skill-item, .contact-item, .social-link');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('hover');
    });

    element.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('hover');
    });
});

// Add click effect
document.addEventListener('mousedown', () => {
    cursorFollower.classList.add('click');
});

document.addEventListener('mouseup', () => {
    cursorFollower.classList.remove('click');
});

// Hide cursor follower when mouse leaves window
document.addEventListener('mouseleave', () => {
    cursorFollower.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursorFollower.style.opacity = '1';
});

// Project Navigation Function
function openProject(projectId) {
    // Project URLs mapping - individual project pages are in projects folder
    const projectUrls = {
        'weather-app': 'projects/weather-app.html',
        'angry-bird': 'projects/angry-bird.html',
        'chat-app': 'projects/chat-app.html',
        'task-manager': 'projects/task-manager.html',
        'caretrack': 'projects/caretrack.html',
        'ecommerce-app': 'projects/ecommerce-app.html',
        'food-delivery': 'projects/food-delivery.html',
        'social-media': 'projects/social-media.html',
        'banking-app': 'projects/banking-app.html'
    };

    const url = projectUrls[projectId];
    if (url) {
        window.location.href = url;
    }
} console.log('🚀 Modern Portfolio loaded successfully!');
console.log('💼 Muhammad Habib Ullah - Flutter Developer & Software Engineer');
console.log('🎨 Try different photo styles using the panel on the right!');
console.log('✨ Cursor follower effect activated!');