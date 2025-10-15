// Main Application JavaScript
class PortfolioApp {
    constructor() {
        this.modules = {};
        this.init();
    }

    async init() {
        // Initialize scroll animations
        this.initScrollAnimations();

        // Initialize all modules
        await this.initModules();

        // Setup download CV functionality
        this.setupDownloadCV();

        // Setup any additional features
        this.setupAdditionalFeatures();

        console.log('Portfolio app initialized successfully');
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
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
    }

    async initModules() {
        try {
            // Initialize Navigation
            if (typeof Navigation !== 'undefined') {
                this.modules.navigation = new Navigation();
            }

            // Initialize Animation Manager
            if (typeof AnimationManager !== 'undefined') {
                this.modules.animations = new AnimationManager();
            }

            // Initialize Projects Manager
            if (typeof ProjectsManager !== 'undefined') {
                this.modules.projects = new ProjectsManager();

                // Auto-render projects if containers exist
                const featuredContainer = document.getElementById('featured-projects-grid');
                const allProjectsContainer = document.getElementById('all-projects');

                if (featuredContainer) {
                    this.modules.projects.renderProjects('featured-projects-grid', true);
                }
                if (allProjectsContainer) {
                    this.modules.projects.renderProjects('all-projects', false);
                }
            }

            // Initialize Cursor Follower
            if (typeof CursorFollower !== 'undefined') {
                this.modules.cursorFollower = new CursorFollower();
            }

            // Initialize Contact Manager
            if (typeof ContactManager !== 'undefined') {
                this.modules.contactManager = new ContactManager();
            }

            // Initialize Education & Experience Manager
            if (typeof EducationExperienceManager !== 'undefined') {
                this.modules.educationExperienceManager = new EducationExperienceManager();
            }

            // Initialize Projects Manager (if exists)
            if (typeof ProjectsManager !== 'undefined') {
                this.modules.projectsManager = new ProjectsManager();
            }

        } catch (error) {
            console.error('Error initializing modules:', error);
        }
    }

    setupDownloadCV() {
        const downloadCVBtns = document.querySelectorAll('#downloadCV, #navDownloadCV');

        downloadCVBtns.forEach(btn => {
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleCVDownload();
                });
            }
        });
    }

    handleCVDownload() {
        // Get CV download link from contact data
        const cvLink = this.modules.contactManager?.getContactData()?.assets?.cvDownloadLink;

        if (cvLink && cvLink !== '#') {
            // If there's a valid CV link, download it
            const link = document.createElement('a');
            link.href = cvLink;
            link.download = 'Muhammad_Habib_Ullah_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            // Show alert for now - replace with actual CV download
            alert('CV download functionality is ready! Please add your CV file and update the download link in the contact data configuration.');

            // Optional: Show a modal or notification instead of alert
            this.showCVNotification();
        }
    }

    showCVNotification() {
        // Create a modern notification instead of alert
        const notification = document.createElement('div');
        notification.className = 'cv-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-info-circle"></i>
                <span>CV download will be available soon!</span>
                <button onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--bg-tertiary);
            border: 1px solid var(--primary-color);
            border-radius: 8px;
            padding: 1rem;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    setupAdditionalFeatures() {
        // Setup any additional features like theme switching, etc.
        this.setupThemeToggle();
        this.setupBackToTop();
    }

    setupThemeToggle() {
        // Future: Add theme toggle functionality if needed
    }

    setupBackToTop() {
        // Create back to top button
        const backToTop = document.createElement('button');
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.className = 'back-to-top';
        backToTop.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        `;

        document.body.appendChild(backToTop);

        // Show/hide based on scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        });

        // Scroll to top on click
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Public methods to interact with modules
    getModule(moduleName) {
        return this.modules[moduleName];
    }

    updateContactInfo(newData) {
        if (this.modules.contactManager) {
            this.modules.contactManager.updateContactInfo(newData);
        }
    }

    addEducation(educationItem) {
        if (this.modules.educationExperienceManager) {
            return this.modules.educationExperienceManager.addEducation(educationItem);
        }
    }

    addExperience(experienceItem) {
        if (this.modules.educationExperienceManager) {
            return this.modules.educationExperienceManager.addExperience(experienceItem);
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});

// Make it globally accessible for console debugging
window.PortfolioApp = PortfolioApp;