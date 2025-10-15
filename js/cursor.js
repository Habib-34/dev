// Cursor Follower Module
class CursorFollower {
    constructor() {
        this.cursorFollower = document.querySelector('.cursor-follower');
        this.mouseX = 0;
        this.mouseY = 0;
        this.followerX = 0;
        this.followerY = 0;

        this.init();
    }

    init() {
        if (!this.cursorFollower) return;

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        // Start animation
        this.animate();
        this.setupEventListeners();
    }

    animate() {
        const speed = 0.15;
        this.followerX += (this.mouseX - this.followerX) * speed;
        this.followerY += (this.mouseY - this.followerY) * speed;

        this.cursorFollower.style.left = this.followerX + 'px';
        this.cursorFollower.style.top = this.followerY + 'px';

        requestAnimationFrame(() => this.animate());
    }

    setupEventListeners() {
        // Static elements
        const hoverElements = document.querySelectorAll('a, button, .btn, .skill-item, .social-link');

        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursorFollower.classList.add('hover');
            });

            element.addEventListener('mouseleave', () => {
                this.cursorFollower.classList.remove('hover');
            });
        });

        // Dynamic elements with event delegation
        this.setupDynamicElements();
        this.setupClickEvents();
        this.setupDragEvents();
    }

    setupDynamicElements() {
        // Project cards
        document.addEventListener('mouseenter', (e) => {
            if (e.target.closest('.project-card')) {
                this.cursorFollower.classList.add('hover');
            }
        }, true);

        document.addEventListener('mouseleave', (e) => {
            if (e.target.closest('.project-card')) {
                this.cursorFollower.classList.remove('hover');
            }
        }, true);

        // Contact items
        document.addEventListener('mouseenter', (e) => {
            if (e.target.closest('.contact-item')) {
                this.cursorFollower.classList.add('hover');
            }
        }, true);

        document.addEventListener('mouseleave', (e) => {
            if (e.target.closest('.contact-item')) {
                this.cursorFollower.classList.remove('hover');
            }
        }, true);

        // Social links
        document.addEventListener('mouseenter', (e) => {
            if (e.target.closest('.social-link')) {
                this.cursorFollower.classList.add('hover');
            }
        }, true);

        document.addEventListener('mouseleave', (e) => {
            if (e.target.closest('.social-link')) {
                this.cursorFollower.classList.remove('hover');
            }
        }, true);
    }

    setupClickEvents() {
        document.addEventListener('mousedown', () => {
            this.cursorFollower.classList.add('click');
        });

        document.addEventListener('mouseup', () => {
            this.cursorFollower.classList.remove('click');
        });
    }

    setupDragEvents() {
        document.addEventListener('dragstart', () => {
            this.cursorFollower.classList.add('click');
        });

        document.addEventListener('dragend', () => {
            this.cursorFollower.classList.remove('click');
            this.cursorFollower.classList.remove('hover');
        });

        document.addEventListener('drop', () => {
            this.cursorFollower.classList.remove('click');
            this.cursorFollower.classList.remove('hover');
        });

        // Safety reset
        let resetTimeout;
        const safetyReset = () => {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
                if (!document.querySelector(':active') && !document.querySelector('[draggable]:hover')) {
                    this.cursorFollower.classList.remove('click');
                }
            }, 100);
        };

        document.addEventListener('mousemove', safetyReset);
        document.addEventListener('touchend', () => {
            this.cursorFollower.classList.remove('click');
            this.cursorFollower.classList.remove('hover');
        });

        window.addEventListener('blur', () => {
            this.cursorFollower.classList.remove('click');
            this.cursorFollower.classList.remove('hover');
        });

        window.addEventListener('focus', () => {
            this.cursorFollower.classList.remove('click');
            this.cursorFollower.classList.remove('hover');
        });

        // Hide cursor when mouse leaves window
        document.addEventListener('mouseleave', () => {
            this.cursorFollower.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            this.cursorFollower.style.opacity = '1';
        });
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CursorFollower;
}