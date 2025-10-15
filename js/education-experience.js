// Education & Experience Module
class EducationExperienceManager {
    constructor() {
        this.data = null;
        this.init();
    }

    async init() {
        await this.loadData();
        this.renderEducationExperience();
    }

    async loadData() {
        // Load data from education-experience.js
        if (typeof educationExperienceData !== 'undefined') {
            this.data = educationExperienceData;
        }
    }

    createTimelineItem(item, type) {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        let title, subtitle, duration, description;

        if (type === 'education') {
            title = item.degree;
            subtitle = item.institution;
            duration = item.duration;
            description = item.description;
        } else if (type === 'course') {
            title = item.title;
            subtitle = item.provider;
            duration = item.year;
            description = item.description;
        } else if (type === 'experience') {
            title = item.position;
            subtitle = item.company;
            duration = item.duration;
            description = item.description;
        }

        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h4>${title}</h4>
                <h5>${subtitle}</h5>
                <div class="timeline-duration">${duration}</div>
                <div class="timeline-description">
                    ${description}
                </div>
            </div>
        `;

        return timelineItem;
    }

    renderEducationExperience() {
        this.renderEducationSection();
        this.renderExperienceSection();
    }

    renderEducationSection() {
        const educationTimeline = document.querySelector('.education-column .timeline');
        if (educationTimeline && this.data) {
            educationTimeline.innerHTML = '';

            // Add education items
            this.data.education.forEach(item => {
                educationTimeline.appendChild(this.createTimelineItem(item, 'education'));
            });

            // Add courses
            this.data.courses.forEach(item => {
                educationTimeline.appendChild(this.createTimelineItem(item, 'course'));
            });
        }
    }

    renderExperienceSection() {
        const experienceTimeline = document.querySelector('.experience-column .timeline');
        if (experienceTimeline && this.data) {
            experienceTimeline.innerHTML = '';

            this.data.experience.forEach(item => {
                experienceTimeline.appendChild(this.createTimelineItem(item, 'experience'));
            });
        }
    }

    // Public methods for updating data
    addEducation(educationItem) {
        if (typeof educationExperienceManager !== 'undefined') {
            const id = educationExperienceManager.addEducation(educationItem);
            this.renderEducationSection();
            return id;
        }
    }

    addCourse(courseItem) {
        if (typeof educationExperienceManager !== 'undefined') {
            const id = educationExperienceManager.addCourse(courseItem);
            this.renderEducationSection();
            return id;
        }
    }

    addExperience(experienceItem) {
        if (typeof educationExperienceManager !== 'undefined') {
            const id = educationExperienceManager.addExperience(experienceItem);
            this.renderExperienceSection();
            return id;
        }
    }

    updateEducation(id, updates) {
        if (typeof educationExperienceManager !== 'undefined') {
            const success = educationExperienceManager.updateEducation(id, updates);
            if (success) {
                this.renderEducationSection();
            }
            return success;
        }
    }

    updateCourse(id, updates) {
        if (typeof educationExperienceManager !== 'undefined') {
            const success = educationExperienceManager.updateCourse(id, updates);
            if (success) {
                this.renderEducationSection();
            }
            return success;
        }
    }

    updateExperience(id, updates) {
        if (typeof educationExperienceManager !== 'undefined') {
            const success = educationExperienceManager.updateExperience(id, updates);
            if (success) {
                this.renderExperienceSection();
            }
            return success;
        }
    }

    // Get data methods
    getAllEducation() {
        return this.data ? this.data.education : [];
    }

    getAllCourses() {
        return this.data ? this.data.courses : [];
    }

    getAllExperience() {
        return this.data ? this.data.experience : [];
    }

    getCoursesByCategory(category) {
        return this.data ? this.data.courses.filter(course => course.category === category) : [];
    }

    getCurrentItems() {
        if (!this.data) return { education: [], experience: [] };

        return {
            education: this.data.education.filter(item => item.status === 'current'),
            experience: this.data.experience.filter(item => item.status === 'current')
        };
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EducationExperienceManager;
}