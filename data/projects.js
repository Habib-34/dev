// Projects Data Configuration
const projectsData = [
    {
        id: 'chat-app',
        title: 'WhatsApp Clone',
        type: 'Mobile App Development',
        description: 'A feature-rich WhatsApp clone application that replicates the core messaging experience. Features include real-time messaging, group chats, multimedia sharing (images, videos, documents), voice messages, and message status indicators. Built with Flutter and Firebase for seamless real-time communication with end-to-end encryption support.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Firebase Auth', 'Firebase Storage'],
        platforms: {
            'GitHub': 'https://github.com/Habib-34/whatsapp-clone'
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
        id: 'to-do-list',
        title: 'To-Do List App',
        type: 'Mobile App Development',
        description: 'A simple and elegant To-Do List application with integrated calendar functionality for better task management. Features include task creation with titles and descriptions, calendar view to organize tasks by date, task completion tracking, and the ability to view upcoming tasks. Built with Flutter for a clean and intuitive user experience with local data persistence.',
        technologies: ['Flutter', 'Dart', 'SQLite', 'Provider', 'Table Calendar'],
        platforms: {
            'GitHub': 'https://github.com/Habib-34/Todo-List'
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
        id: 'restaurant-booking',
        title: 'Restaurant Booking App',
        type: 'Mobile App Development',
        description: 'A straightforward restaurant booking application that allows users to browse restaurants, view available time slots, and make reservations. Features include restaurant listings with details, date and time selection for bookings, reservation management, and booking confirmation. Built with Flutter to provide a smooth booking experience for dining out.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
        platforms: {
            'GitHub': 'https://github.com/Habib-34/Restaurant-Booking-App'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: true
    },
    {
        id: 'weather-app',
        title: 'Weather Forecast App',
        type: 'Mobile App Development',
        description: 'Real-time weather app providing comprehensive weather data with 7-day forecasts and interactive maps. Features beautiful animations and smooth transitions that enhance user experience. Built with Flutter and OpenWeatherMap API to deliver accurate weather information across multiple global locations.',
        technologies: ['Flutter', 'Dart', 'REST API', 'Provider', 'Geolocator'],
        platforms: {
            'GitHub': 'https://github.com/Habib-34/Weather-UI'
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
        id: 'dictionary-app',
        title: 'Dictionary App',
        type: 'Mobile App Development',
        description: 'A simple dictionary application that helps users look up word definitions, pronunciations, and examples. Features include word search functionality, detailed definitions with parts of speech, pronunciation audio, example sentences, and word history tracking. Built with Flutter and integrated with dictionary API for accurate and comprehensive word information.',
        technologies: ['Flutter', 'Dart', 'REST API', 'Provider'],
        platforms: {
            'GitHub': 'https://github.com/Habib-34/dictionary-app'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: false
    },
    {
        id: 'bitcoin-ticker',
        title: 'Bitcoin Ticker App',
        type: 'Mobile App Development',
        description: 'A cryptocurrency price tracking application that displays real-time Bitcoin and other cryptocurrency rates in different national currencies. Features include live price updates, multiple cryptocurrency support (Bitcoin, Ethereum, Litecoin), currency conversion to various fiat currencies, and price change indicators. Built with Flutter and cryptocurrency API for accurate market data.',
        technologies: ['Flutter', 'Dart', 'REST API', 'Provider'],
        platforms: {
            'GitHub': 'https://github.com/Habib-34/bitcoin-ticker'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: false
    },
    {
        id: 'bmi-calculator',
        title: 'BMI Calculator',
        type: 'Mobile App Development',
        description: 'A simple and intuitive BMI (Body Mass Index) calculator app that helps users calculate their body mass index based on height and weight. Features include easy input for height and weight, instant BMI calculation, BMI category classification (Underweight, Normal, Overweight, Obese), and health recommendations. Built with Flutter for a clean and user-friendly interface.',
        technologies: ['Flutter', 'Dart'],
        platforms: {
            'GitHub': 'https://github.com/Habib-34/bmi-calculator'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: false
    },
    {
        id: 'quizzler',
        title: 'Quizzler – True/False Quiz App',
        type: 'Mobile App Development',
        description: 'A fun and interactive True/False quiz application that tests users\' general knowledge across various topics. Features include a collection of true/false questions, instant answer feedback, score tracking, progress bar showing quiz completion, and the ability to restart the quiz. Built with Flutter using object-oriented programming principles for clean code architecture.',
        technologies: ['Flutter', 'Dart', 'OOP'],
        platforms: {
            'GitHub': 'https://github.com/Habib-34/quizzler-app'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: false
    },
    {
        id: 'xylophone',
        title: 'Xylophone App',
        type: 'Mobile App Development',
        description: 'A simple and colorful xylophone musical instrument app that allows users to play music by tapping on colorful bars. Features include 7 different musical notes corresponding to xylophone bars, vibrant and intuitive UI design, instant sound playback on tap, and responsive touch interactions. Built with Flutter and audio player package for realistic xylophone sounds.',
        technologies: ['Flutter', 'Dart', 'AudioPlayers'],
        platforms: {
            'GitHub': 'https://github.com/Habib-34/xylophone-app'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: false
    },
    {
        id: 'dicee',
        title: 'Dicee App',
        type: 'Mobile App Development',
        description: 'A fun dice rolling application that displays two dice and rolls them with random results. Features include dual dice display, random number generation (1-6) for each die, shake or tap to roll functionality, and history tracking showing the last 3 roll results. Built with Flutter for smooth animations and an engaging user experience perfect for games and decision making.',
        technologies: ['Flutter', 'Dart', 'Random'],
        platforms: {
            'GitHub': 'https://github.com/Habib-34/dicee-app'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?w=800&h=600&fit=crop&auto=format&q=80'
            ]
        },
        featured: false
    },
    {
        id: 'angry-birds',
        title: 'Angry Birds Game',
        type: 'Game Development',
        description: 'A classic physics-based Angry Birds game built with JavaFX featuring an interactive start screen with 3-4 selectable levels. Each level presents a unique challenge where players launch various types of birds to hit and destroy pig structures. The game includes realistic physics simulation for projectile motion, collision detection, destructible obstacles, and score tracking. Features a polished UI with level selection menu, pause/resume functionality, and smooth animations for an engaging gameplay experience.',
        technologies: ['Java', 'JavaFX', 'Physics Engine', 'OOP', 'Game Design'],
        platforms: {
            'GitHub': 'https://github.com/Habib-34/angry-birds-javafx'
        },
        images: {
            thumbnail: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop&crop=focalpoint&auto=format&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop&auto=format&q=80',
                'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&auto=format&q=80'
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