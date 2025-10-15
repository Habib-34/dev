// Contact Module
class ContactManager {
    constructor() {
        this.contactData = null;
        this.contactItems = null;
        this.socialLinks = null;
        this.init();
    }

    async init() {
        // Wait for data to be loaded
        await this.loadContactData();
        this.renderAllSections();
    }

    async loadContactData() {
        // In a real scenario, this might load from an external source
        // For now, we'll use the global variables from contact.js
        if (typeof contactData !== 'undefined') {
            this.contactData = contactData;
            this.contactItems = contactItems;
            this.socialLinks = socialLinks;
        }
    }

    renderAllSections() {
        this.renderContactItems();
        this.renderSocialLinks();
        this.renderHeroSocialLinks();
        this.renderAvailabilityStatus();
    }

    createContactItem(item) {
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item';

        if (item.clickable && item.getLink()) {
            contactItem.style.cursor = 'pointer';
            contactItem.addEventListener('click', () => {
                const link = item.getLink();
                window.open(link, link.startsWith('mailto:') || link.startsWith('tel:') ? '_self' : '_blank');
            });
        }

        contactItem.innerHTML = `
            <div class="contact-item-icon">
                <i class="${item.icon}"></i>
            </div>
            <div class="contact-item-content">
                <h4>${item.title}</h4>
                ${item.clickable && item.getLink() ?
                `<a href="${item.getLink()}">${item.getValue()}</a>` :
                `<span>${item.getValue()}</span>`
            }
            </div>
        `;

        return contactItem;
    }

    createSocialLink(social) {
        if (!social.isEnabled()) return null;

        const socialLink = document.createElement('a');
        socialLink.href = social.getUrl();
        socialLink.className = 'social-link';
        socialLink.target = '_blank';
        socialLink.title = social.title;
        socialLink.innerHTML = `<i class="${social.icon}"></i>`;

        return socialLink;
    }

    renderContactItems() {
        const contactItemsContainer = document.querySelector('.contact-items');
        if (contactItemsContainer && this.contactItems) {
            contactItemsContainer.innerHTML = '';
            this.contactItems.forEach(item => {
                contactItemsContainer.appendChild(this.createContactItem(item));
            });
        }
    }

    renderSocialLinks() {
        const socialLinksContainer = document.querySelector('.social-links');
        if (socialLinksContainer && this.socialLinks) {
            socialLinksContainer.innerHTML = '';
            this.socialLinks.forEach(social => {
                const socialLink = this.createSocialLink(social);
                if (socialLink) {
                    socialLinksContainer.appendChild(socialLink);
                }
            });
        }
    }

    renderHeroSocialLinks() {
        const heroButtons = document.querySelector('.hero-buttons');
        if (heroButtons && this.contactData) {
            const githubLink = heroButtons.querySelector('a[href*="github"]');
            const linkedinLink = heroButtons.querySelector('a[href*="linkedin"]');

            if (githubLink && this.contactData.social.github) {
                githubLink.href = this.contactData.social.github;
            }

            if (linkedinLink && this.contactData.social.linkedin) {
                linkedinLink.href = this.contactData.social.linkedin;
            }
        }
    }

    renderAvailabilityStatus() {
        const statusElement = document.querySelector('.availability-status h3');
        const servicesContainer = document.querySelector('.availability-list');

        if (statusElement && this.contactData) {
            const indicator = statusElement.querySelector('.status-indicator');
            if (indicator) {
                indicator.style.backgroundColor = this.contactData.personal.availableForWork ?
                    'var(--primary-color)' : '#666';
            }

            const statusText = statusElement.childNodes[2]; // Text node after the indicator
            if (statusText) {
                statusText.textContent = this.contactData.personal.availableForWork ?
                    'Available for Work' : 'Currently Unavailable';
            }
        }

        if (servicesContainer && typeof servicesOffered !== 'undefined') {
            servicesContainer.innerHTML = '';
            servicesOffered.forEach(service => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check"></i> ${service}`;
                servicesContainer.appendChild(li);
            });
        }
    }

    updateContactInfo(newContactData) {
        // Update the global contact data
        if (this.contactData) {
            Object.assign(this.contactData.personal, newContactData.personal || {});
            Object.assign(this.contactData.contact, newContactData.contact || {});
            Object.assign(this.contactData.social, newContactData.social || {});
            Object.assign(this.contactData.assets, newContactData.assets || {});

            // Re-render all sections
            this.renderAllSections();
        }
    }

    // Public method to get contact data
    getContactData() {
        return this.contactData;
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContactManager;
}