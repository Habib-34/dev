// Projects Manager - Handles project rendering and navigation
class ProjectsManager {
    constructor() {
        this.initialize();
    }

    initialize() {
        console.log('📱 Projects Manager initialized');
    }

    // Render projects in a container
    renderProjects(containerId, isFeatured = false) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`⚠️ Container ${containerId} not found`);
            return;
        }

        // Get projects data from global projectsData or data/projects.js
        const projectsToShow = window.projectsData ?
            (isFeatured ? window.projectsData.filter(p => p.featured) : window.projectsData) : [];

        // Clear container
        container.innerHTML = '';

        // Render project cards
        projectsToShow.forEach(project => {
            const projectCard = this.createProjectCard(project);
            container.appendChild(projectCard);
        });

        // Add archive card for featured projects
        if (isFeatured && container.classList.contains('projects-grid')) {
            const archiveCard = this.createArchiveCard();
            container.appendChild(archiveCard);
        }

        console.log(`✅ Rendered ${projectsToShow.length} project cards successfully!`);
    }

    // Create project card element
    createProjectCard(project) {
        const cardElement = document.createElement('div');
        cardElement.className = 'project-card';
        cardElement.onclick = () => this.openProject(project.id);

        cardElement.innerHTML = `
            <div class="project-image">
                <img src="${project.images.thumbnail}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-type">
                    <span class="original-text">${project.type}</span>
                    <span class="hover-text">View Project</span>
                </p>
            </div>
        `;

        return cardElement;
    }

    // Create Archive Card for featured projects section
    createArchiveCard() {
        const cardElement = document.createElement('div');
        cardElement.className = 'project-card archive-link-card';
        cardElement.onclick = () => window.location.href = 'projects.html';

        cardElement.innerHTML = `
            <div class="project-image" 
                 style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-archive" style="font-size: 3rem; color: white;"></i>
            </div>
            <div class="project-info">
                <h3 class="project-title">Projects</h3>
                <p class="project-type">
                    <span class="original-text">All Projects</span>
                    <span class="hover-text">Show Project</span>
                </p>
            </div>
        `;

        return cardElement;
    }

    // Project Navigation Function
    openProject(projectId) {
        // Project URLs mapping - individual project pages are in projects folder
        const projectUrls = {
            'weather-app': 'projects/weather-app.html',
            'angry-bird': 'projects/angry-bird.html',
            'chat-app': 'projects/chat-app.html',
            'task-manager': 'projects/task-manager.html',
            'caretrack': 'projects/caretrack.html',
            'ecommerce-app': 'projects/ecommerce-app.html',
            'food-delivery': 'projects/food-delivery.html',
            'social-media': 'projects/social-media.html'
        };

        const url = projectUrls[projectId];
        if (url) {
            window.location.href = url;
        } else {
            console.warn(`⚠️ Project URL not found for: ${projectId}`);
        }
    }

    // Create detailed project view (for project detail pages)
    renderProjectDetail(projectId, containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`⚠️ Container ${containerId} not found`);
            return;
        }

        const project = window.projectsData ?
            window.projectsData.find(p => p.id === projectId) : null;

        if (!project) {
            console.warn(`⚠️ Project not found: ${projectId}`);
            return;
        }

        // Create and append project detail sections
        container.innerHTML = '';

        const backSection = this.createBackSection();
        const headerSection = this.createProjectHeader(project);
        const contentSection = this.createProjectContent(project);
        const imagesSection = this.createProjectImages(project);

        container.appendChild(backSection);
        container.appendChild(headerSection);
        container.appendChild(contentSection);
        container.appendChild(imagesSection);

        console.log(`✅ Rendered project detail page for: ${project.title}`);
    }

    // Create back button section
    createBackSection() {
        const section = document.createElement('div');
        section.className = 'project-back-section';

        section.innerHTML = `
            <div class="back-button-container">
                <a href="../projects.html" class="back-button">
                    <i class="fas fa-arrow-left"></i>
                    Back to Projects
                </a>
            </div>
        `;

        return section;
    }

    // Create project header section
    createProjectHeader(project) {
        const section = document.createElement('div');
        section.className = 'project-header-section';

        section.innerHTML = `
            <div class="project-header-container">
                <div class="project-category">${project.type}</div>
                <h1 class="project-main-title">${project.title}</h1>
            </div>
        `;

        return section;
    }

    // Create project content section (description + technologies)
    createProjectContent(project) {
        const section = document.createElement('div');
        section.className = 'project-content-section';

        const technologiesList = project.technologies.map(tech =>
            `<span class="tech-tag">${tech}</span>`).join('');

        const platformLinks = this.createPlatformLinks(project.platforms);

        section.innerHTML = `
            <div class="project-content-container">
                <div class="project-content-left">
                    <h2>About this project</h2>
                    <p class="project-description">${project.description}</p>
                    <div class="platform-links-inline">
                        ${platformLinks}
                    </div>
                </div>
                <div class="project-content-right">
                    <div class="technologies-section">
                        <h3>Technologies Used</h3>
                        <div class="technologies-list">
                            ${technologiesList}
                        </div>
                    </div>
                </div>
            </div>
        `;

        return section;
    }

    // Create platform links
    createPlatformLinks(platforms) {
        let links = '';

        if (platforms.playstore) {
            links += `
                <a href="${platforms.playstore}" class="platform-link playstore" target="_blank">
                    <i class="fab fa-google-play"></i>
                    <span>Play Store</span>
                </a>
            `;
        }

        if (platforms.appstore) {
            links += `
                <a href="${platforms.appstore}" class="platform-link appstore" target="_blank">
                    <i class="fab fa-app-store-ios"></i>
                    <span>App Store</span>
                </a>
            `;
        }

        if (platforms.github) {
            links += `
                <a href="${platforms.github}" class="platform-link github" target="_blank">
                    <i class="fab fa-github"></i>
                    <span>GitHub</span>
                </a>
            `;
        }

        return links;
    }

    // Create project images section
    createProjectImages(project) {
        const section = document.createElement('div');
        section.className = 'project-images-section';

        let imagesHTML = '';
        if (project.images && project.images.length > 0) {
            imagesHTML = project.images.map(imageUrl => `
                <div class="project-image-item">
                    <img src="${imageUrl}" alt="${project.title} screenshot" loading="lazy">
                </div>
            `).join('');
        }

        section.innerHTML = `
            <div class="project-images-container">
                <h3>Project Screenshots</h3>
                <div class="project-images-grid">
                    ${imagesHTML}
                </div>
            </div>
        `;

        return section;
    }

    // Public API methods
    refreshProjects(containerId) {
        this.renderProjects(containerId, false);
    }

    refreshFeaturedProjects(containerId) {
        this.renderProjects(containerId, true);
    }
}

// Make ProjectsManager available globally
window.ProjectsManager = ProjectsManager;

// Global function to render project detail page
function renderProjectDetailPage(projectId, containerId) {
    console.log(`🔍 Rendering project detail page for: ${projectId}`);

    if (!window.projectsData) {
        console.error('❌ Projects data not found');
        return;
    }

    const project = window.projectsData.find(p => p.id === projectId);
    if (!project) {
        console.error(`❌ Project with ID ${projectId} not found`);
        return;
    }

    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`❌ Container ${containerId} not found`);
        return;
    }

    // Generate project detail HTML
    container.innerHTML = `
        <!-- Back Button Section -->
        <div class="project-back-section">
            <div class="back-button-container">
                <a href="../projects.html" class="back-button">
                    <i class="fas fa-arrow-left"></i>
                    Back to Projects
                </a>
            </div>
        </div>

        <!-- Project Header Section -->
        <div class="project-header-section">
            <div class="project-header-container">
                <div class="project-category">${project.type || 'Project'}</div>
                <h1 class="project-main-title">${project.title}</h1>
            </div>
        </div>

        <!-- Project Content Section -->
        <div class="project-content-section">
            <div class="project-content-container">
                <div class="project-content-left">
                    <h2>Project Description</h2>
                    <div class="project-description">
                        ${project.description || 'Project description coming soon...'}
                    </div>
                    
                    <!-- Platform Buttons -->
                    <div class="platform-buttons">
                        ${project.platforms && project.platforms['iOS'] ? `
                            <a href="${project.platforms['iOS']}" class="platform-btn app-store-btn" target="_blank">
                                <i class="fab fa-app-store-ios"></i>
                                App Store
                            </a>
                        ` : ''}
                        ${project.platforms && project.platforms['Android'] ? `
                            <a href="${project.platforms['Android']}" class="platform-btn play-store-btn" target="_blank">
                                <i class="fab fa-google-play"></i>
                                Play Store
                            </a>
                        ` : ''}
                        ${project.platforms && project.platforms['Visit Website'] ? `
                            <a href="${project.platforms['Visit Website']}" class="platform-btn website-btn" target="_blank">
                                <i class="fas fa-globe"></i>
                                Visit Website
                            </a>
                        ` : ''}
                        ${project.platforms && project.platforms['GitHub'] ? `
                            <a href="${project.platforms['GitHub']}" class="platform-btn github-btn" target="_blank">
                                <i class="fab fa-github"></i>
                                GitHub
                            </a>
                        ` : ''}
                    </div>
                </div>
                
                <div class="project-content-right">
                    <div class="technologies-section">
                        <h3>Technologies Used</h3>
                        <div class="technologies-list">
                            ${project.technologies ? project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('') : '<span class="tech-tag">Flutter</span><span class="tech-tag">Dart</span>'}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Project Images Section -->
        ${project.images && project.images.gallery && project.images.gallery.length > 0 ? `
        <div class="project-images-section">
            <div class="project-images-container">
                <h3>Project Screenshots</h3>
                <div class="project-images-grid">
                    ${project.images.gallery.map(image => `
                        <div class="project-image-item">
                            <img src="${image}" alt="${project.title} screenshot" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        ` : `
        <div class="project-images-section">
            <div class="project-images-container">
                <h3>Project Preview</h3>
                <div class="project-images-grid">
                    <div class="project-image-item">
                        <img src="${project.images?.thumbnail || 'https://via.placeholder.com/800x600/0066cc/ffffff?text=Project+Preview'}" alt="${project.title} preview" loading="lazy">
                    </div>
                </div>
            </div>
        </div>
        `}
    `;

    console.log(`✅ Project detail page for ${projectId} rendered successfully!`);
}

// Make the function globally available
window.renderProjectDetailPage = renderProjectDetailPage;