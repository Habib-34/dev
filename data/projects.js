// Projects Data Configuration
const projectsData = [
    {
        id: 'weather-app',
        title: 'Weather Forecast App',
        type: 'Mobile App Development',
        description: 'Real-time weather app providing comprehensive weather data with 7-day forecasts and interactive maps. Features beautiful animations and smooth transitions that enhance user experience. Built with Flutter and OpenWeatherMap API to deliver accurate weather information across multiple global locations.',
        technologies: ['Flutter', 'Dart', 'REST API', 'Provider', 'Geolocator'],
        platforms: {
            'iOS': 'https://apps.apple.com/app/weather-forecast',
            'Android': 'https://play.google.com/store/apps/details?id=com.weather.app',
            'Visit Website': 'https://your-weather-app.netlify.app',
            'GitHub': 'https://github.com/your-username/weather-app'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1504608616709-0199ae38b9c6?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: true
    },
    {
        id: 'caretrack',
        title: 'CareTrack - Health Monitoring',
        type: 'Healthcare App Development',
        description: 'Comprehensive healthcare management app designed for tracking medications, medical appointments, and vital health metrics. Features secure end-to-end encryption and family sharing capabilities for coordinated care. Built with Firebase backend providing real-time synchronization and biometric authentication for enhanced security.',
        technologies: ['Flutter', 'Firebase', 'Bloc', 'Local Notifications', 'Biometrics'],
        platforms: {
            'iOS': 'https://apps.apple.com/app/caretrack-health',
            'Android': 'https://play.google.com/store/apps/details?id=com.caretrack.health',
            'Visit Website': 'https://caretrack-demo.netlify.app',
            'GitHub': 'https://github.com/your-username/caretrack-app'
        },
        images: {
            thumbnail: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/c2f57f839fea8cd40cb8ebf2af54404e-1755523643480/CareTrack%20%E2%80%93%20Labor%20Awareness%20_%20Management%20%20App.png',
            gallery: [
                'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: true
    },
    {
        id: 'angry-bird',
        title: 'Angry Bird Game',
        type: 'Game Development',
        description: 'Physics-based puzzle game featuring realistic destruction mechanics and multiple unique bird types with special abilities. Built with Unity game engine incorporating custom physics simulations and progressively challenging levels. Includes cloud save functionality and comprehensive analytics for tracking player progress and achievements.',
        technologies: ['Unity', 'C#', 'Physics Engine', '2D Graphics', 'Game Analytics'],
        platforms: {
            'Android': 'https://play.google.com/store/apps/details?id=com.angrybird.game',
            'iOS': 'https://apps.apple.com/app/angry-bird-game',
            'Visit Website': 'https://angry-bird-game.netlify.app',
            'GitHub': 'https://github.com/your-username/angry-bird-game'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: true
    },
    {
        id: 'chat-app',
        title: 'Real-Time Chat App',
        type: 'Mobile App Development',
        description: 'Modern real-time messaging application with end-to-end encryption ensuring secure communication between users. Features comprehensive group chat functionality, multimedia file sharing, and integrated voice/video calling capabilities. Built with Flutter and Firebase to provide instant message delivery and seamless cross-platform synchronization.',
        technologies: ['Flutter', 'Firebase', 'WebSocket', 'Encryption'],
        platforms: {
            'iOS': 'https://apps.apple.com/app/realtime-chat',
            'Android': 'https://play.google.com/store/apps/details?id=com.chat.realtime',
            'GitHub': 'https://github.com/your-username/realtime-chat-app'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1611746869696-d09bce200020?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1611746869696-d09bce200020?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: true
    },
    {
        id: 'task-manager',
        title: 'Task Management App',
        type: 'Productivity App',
        description: 'Powerful task management application designed for both individual productivity and team collaboration workflows. Features comprehensive project organization, intelligent deadline reminders, and detailed progress tracking systems. Built with Flutter and SQLite providing robust offline functionality and seamless data synchronization across all devices.',
        technologies: ['Flutter', 'SQLite', 'Provider', 'Local Notifications'],
        platforms: {
            'iOS': 'https://apps.apple.com/app/task-manager-pro',
            'Android': 'https://play.google.com/store/apps/details?id=com.taskmanager.pro',
            'GitHub': 'https://github.com/your-username/task-manager-app'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: true
    },
    {
        id: 'ecommerce-app',
        title: 'E-Commerce Mobile App',
        type: 'E-Commerce Development',
        description: 'Full-featured e-commerce application providing seamless online shopping experience with comprehensive product catalog and advanced filtering options. Features secure shopping cart functionality, integrated payment gateways, and real-time order tracking system. Built with Flutter and Firebase offering user review systems, wishlist management, and personalized shopping recommendations.',
        technologies: ['Flutter', 'Firebase', 'Stripe API', 'Provider'],
        platforms: {
            'iOS': 'https://apps.apple.com/app/ecommerce-mobile',
            'Android': 'https://play.google.com/store/apps/details?id=com.ecommerce.mobile',
            'GitHub': 'https://github.com/your-username/ecommerce-app'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1556742111-f7c7f4650686?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: false
    },
    {
        id: 'food-delivery',
        title: 'Food Delivery App',
        type: 'Food Delivery Platform',
        description: 'Comprehensive food delivery platform seamlessly connecting hungry customers with their favorite local restaurants through intuitive mobile interface. Features real-time GPS order tracking, accurate delivery time estimation, and integrated payment systems supporting multiple payment methods. Includes customer review system, promotional offers management, and loyalty rewards program to enhance user engagement.',
        technologies: ['Flutter', 'Google Maps API', 'Firebase', 'Payment Gateways'],
        platforms: {
            'iOS': 'https://apps.apple.com/app/food-delivery-pro',
            'Android': 'https://play.google.com/store/apps/details?id=com.fooddelivery.pro',
            'GitHub': 'https://github.com/your-username/food-delivery-app'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: false
    },
    {
        id: 'social-media',
        title: 'Social Media App',
        type: 'Social Networking Platform',
        description: 'Feature-rich social media platform enabling users to connect, share, and engage with their communities through various interactive features. Supports multimedia post creation, real-time news feed updates, and comprehensive direct messaging system with group chat capabilities. Built with advanced privacy controls, content moderation tools, and live story features for enhanced social interaction.',
        technologies: ['Flutter', 'Firebase', 'WebSocket', 'Cloud Storage'],
        platforms: {
            'iOS': 'https://apps.apple.com/app/social-media-connect',
            'Android': 'https://play.google.com/store/apps/details?id=com.socialmedia.connect',
            'GitHub': 'https://github.com/your-username/social-media-app'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: false
    }
];

// Project Categories
const projectCategories = [
    { id: 'all', name: 'All Projects', count: () => projectsData.length },
    { id: 'mobile', name: 'Mobile Apps', count: () => projectsData.filter(p => p.platforms && (p.platforms['iOS'] || p.platforms['Android'])).length },
    { id: 'flutter', name: 'Flutter', count: () => projectsData.filter(p => p.technologies.includes('Flutter')).length },
    { id: 'fintech', name: 'FinTech', count: () => projectsData.filter(p => p.type.toLowerCase().includes('fintech')).length },
    { id: 'healthcare', name: 'Healthcare', count: () => projectsData.filter(p => p.type.toLowerCase().includes('healthcare')).length }
];

// Project Manager Helper Functions
const projectManager = {
    // Get all projects
    getAllProjects() {
        return projectsData;
    },

    // Get project by ID
    getProjectById(id) {
        return projectsData.find(project => project.id === id);
    },

    // Get projects by category
    getProjectsByCategory(category) {
        if (category === 'all') return projectsData;

        switch (category) {
            case 'mobile':
                return projectsData.filter(p => p.platforms && (p.platforms['iOS'] || p.platforms['Android']));
            case 'flutter':
                return projectsData.filter(p => p.technologies.includes('Flutter'));
            case 'fintech':
                return projectsData.filter(p => p.type.toLowerCase().includes('fintech'));
            case 'healthcare':
                return projectsData.filter(p => p.type.toLowerCase().includes('healthcare'));
            default:
                return projectsData;
        }
    },

    // Get projects by technology
    getProjectsByTechnology(tech) {
        return projectsData.filter(project =>
            project.technologies.some(t => t.toLowerCase().includes(tech.toLowerCase()))
        );
    },

    // Get projects by status
    getProjectsByStatus(status) {
        return projectsData.filter(project => project.status === status);
    },

    // Add new project
    addProject(project) {
        projectsData.unshift(project);
        return project.id;
    },

    // Update project
    updateProject(id, updates) {
        const index = projectsData.findIndex(project => project.id === id);
        if (index !== -1) {
            Object.assign(projectsData[index], updates);
            return true;
        }
        return false;
    },

    // Get featured projects (by featured flag)
    getFeaturedProjects() {
        return projectsData.filter(project => project.featured === true);
    },

    // Search projects
    searchProjects(query) {
        const searchTerm = query.toLowerCase();
        return projectsData.filter(project =>
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
        );
    }
};

// Make projectsData available globally
window.projectsData = projectsData;