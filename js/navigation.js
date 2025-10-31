// Navigation Module
class NavigationManager {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.navLinks = document.querySelectorAll('.nav-menu a');
        this.sections = document.querySelectorAll('section[id]');

        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupScrollDetection();
        this.setupNavbarBehavior();
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));

                if (target) {
                    const offset = this.navbar ? this.navbar.offsetHeight + 20 : 80;
                    const targetPosition = target.offsetTop - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update active nav link
                    this.updateActiveLink(anchor);
                }
            });
        });
    }

    setupScrollDetection() {
        window.addEventListener('scroll', () => {
            this.updateNavigationOnScroll();
            this.updateNavbarStyle();
        });
    }

    updateNavigationOnScroll() {
        let current = '';
        const scrollY = window.pageYOffset + 100;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');

            // Special case: keep "home" highlighted when viewing "about" section
            if (current === 'about' && linkHref === '#home') {
                link.classList.add('active');
            } else if (linkHref === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    updateActiveLink(clickedLink) {
        this.navLinks.forEach(link => link.classList.remove('active'));
        clickedLink.classList.add('active');
    }

    setupNavbarBehavior() {
        // Add scroll-based navbar styling if needed
        // This can be extended for navbar background changes, etc.
    }

    updateNavbarStyle() {
        // Add any scroll-based navbar style updates here
        // For example, changing background opacity based on scroll position
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Navigation;
}