// Education & Experience Configuration
const educationExperienceData = {
    education: [
        {
            id: 'uet-se',
            degree: 'Bachelor of Science in Software Engineering',
            institution: 'University of Engineering and Technology (UET), Taxila',
            duration: '2023 - Present',
            description: `Currently pursuing my degree with a focus on software development, mobile
            application development, and modern programming paradigms. Maintaining excellent academic
            performance while actively working on real-world projects.`,
            status: 'current',
            gpa: null // Add if needed
        }
    ],
    courses: [
        {
            id: 'flutter-bootcamp-tadas',
            title: 'Flutter Bootcamp: Zero to Mastery',
            provider: 'by Tadas Petra',
            year: '2025',
            description: `Comprehensive Flutter bootcamp covering advanced development techniques, 
            architecture patterns, and industry best practices from zero to mastery level.`,
            category: 'flutter',
            status: 'completed'
        },
        {
            id: 'flutter-animations-andrea',
            title: 'Code with Andrea Flutter Animation Masterclass',
            provider: 'by Andrea Bizzotto',
            year: '2025',
            description: `Advanced masterclass focusing on Flutter animations, custom transitions, 
            and creating engaging user experiences with smooth animations.`,
            category: 'flutter',
            status: 'completed'
        },
        {
            id: 'flutter-complete-guide-max',
            title: 'Flutter & Dart - The Complete Guide',
            provider: 'by Maximilian Schwarzmüller',
            year: '2024',
            description: `Comprehensive course covering Flutter and Dart fundamentals, advanced widgets, 
            state management, and real-world application development.`,
            category: 'flutter',
            status: 'completed'
        },
        {
            id: 'flutter-bootcamp-google',
            title: 'The Complete Flutter Development Bootcamp with Dart',
            provider: 'Officially created in collaboration with the Google Flutter team',
            year: '2024',
            description: `Official Flutter bootcamp developed with Google's Flutter team, covering 
            comprehensive mobile app development from basics to advanced concepts.`,
            category: 'flutter',
            status: 'completed'
        }
    ],
    experience: [
        {
            id: 'fiverr-freelancer',
            position: 'Freelance Flutter Developer',
            company: 'Fiverr',
            duration: 'Aug 2025 - Present',
            description: `Providing professional Flutter development services to clients worldwide. 
            Specializing in cross-platform mobile applications, UI/UX implementation, 
            and custom app solutions for various business needs.`,
            status: 'current',
            skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'UI/UX'],
            achievements: [] // Add achievements if needed
        }
    ]
};

// Helper functions to manage education and experience
const educationExperienceManager = {
    // Add new education entry
    addEducation(educationItem) {
        educationExperienceData.education.unshift(educationItem);
        return educationItem.id;
    },

    // Add new course
    addCourse(courseItem) {
        educationExperienceData.courses.unshift(courseItem);
        return courseItem.id;
    },

    // Add new experience
    addExperience(experienceItem) {
        educationExperienceData.experience.unshift(experienceItem);
        return experienceItem.id;
    },

    // Update education by ID
    updateEducation(id, updates) {
        const index = educationExperienceData.education.findIndex(item => item.id === id);
        if (index !== -1) {
            Object.assign(educationExperienceData.education[index], updates);
            return true;
        }
        return false;
    },

    // Update course by ID
    updateCourse(id, updates) {
        const index = educationExperienceData.courses.findIndex(item => item.id === id);
        if (index !== -1) {
            Object.assign(educationExperienceData.courses[index], updates);
            return true;
        }
        return false;
    },

    // Update experience by ID
    updateExperience(id, updates) {
        const index = educationExperienceData.experience.findIndex(item => item.id === id);
        if (index !== -1) {
            Object.assign(educationExperienceData.experience[index], updates);
            return true;
        }
        return false;
    },

    // Get all education items
    getAllEducation() {
        return educationExperienceData.education;
    },

    // Get all courses
    getAllCourses() {
        return educationExperienceData.courses;
    },

    // Get all experience
    getAllExperience() {
        return educationExperienceData.experience;
    },

    // Get courses by category
    getCoursesByCategory(category) {
        return educationExperienceData.courses.filter(course => course.category === category);
    },

    // Get current items only
    getCurrentItems() {
        return {
            education: educationExperienceData.education.filter(item => item.status === 'current'),
            experience: educationExperienceData.experience.filter(item => item.status === 'current')
        };
    }
};