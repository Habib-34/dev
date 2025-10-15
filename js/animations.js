// Animation Effects Manager
class AnimationManager {
    constructor() {
        this.animationObservers = new Map();
        this.initialize();
    }

    initialize() {
        this.setupStatsAnimation();
        this.setupSkillsAnimation();
        this.setupParallaxEffect();
        this.setupProfilePhotoStyles();
        console.log('🎨 Animation Manager initialized');
    }

    // Stats Animation
    setupStatsAnimation() {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumber = entry.target.querySelector('.stat-number');
                    const originalValue = statNumber.textContent;
                    const numValue = parseInt(originalValue.replace(/\D/g, ''));
                    this.animateValue(statNumber, 0, numValue, 2000, originalValue);
                    statsObserver.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('.stat').forEach(stat => {
            statsObserver.observe(stat);
        });

        this.animationObservers.set('stats', statsObserver);
    }

    // Animate numeric values
    animateValue(element, start, end, duration, originalText) {
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
    }

    // Skills Animation with Stagger
    setupSkillsAnimation() {
        const skillCategories = document.querySelectorAll('.skill-category');
        skillCategories.forEach((category, index) => {
            category.style.animationDelay = `${index * 0.2}s`;
        });
    }

    // Parallax Effect for Hero Background
    setupParallaxEffect() {
        const parallaxHandler = () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                const rate = scrolled * -0.5;
                hero.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        };

        window.addEventListener('scroll', parallaxHandler);
    }

    // Profile Photo Style Changes
    setupProfilePhotoStyles() {
        // Make changeStyle function globally available
        window.changeStyle = (styleName) => {
            this.changeStyle(styleName);
        };
    }

    changeStyle(styleName) {
        const heroImage = document.getElementById('heroImageContainer');
        const buttons = document.querySelectorAll('[onclick^="changeStyle"]');

        if (!heroImage) return;

        // Remove all style classes
        heroImage.className = 'hero-image ' + styleName;

        // Update button styles
        buttons.forEach(btn => {
            btn.style.background = 'var(--bg-secondary)';
            btn.style.color = 'var(--text-primary)';
            btn.style.border = '1px solid var(--border-color)';
        });

        // Highlight active button
        if (event && event.target) {
            event.target.style.background = 'var(--primary-color)';
            event.target.style.color = 'white';
            event.target.style.border = 'none';
        }

        console.log('🎨 Changed photo style to:', styleName);
    }

    // Public API methods
    restartStatsAnimation() {
        document.querySelectorAll('.stat').forEach(stat => {
            const observer = this.animationObservers.get('stats');
            if (observer) {
                observer.observe(stat);
            }
        });
    }

    // Cleanup method
    destroy() {
        this.animationObservers.forEach(observer => {
            observer.disconnect();
        });
        this.animationObservers.clear();
    }
}

// Make AnimationManager available globally
window.AnimationManager = AnimationManager;