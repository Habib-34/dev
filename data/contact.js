// Contact Information Configuration
const contactData = {
    personal: {
        name: 'Muhammad Habib Ullah',
        title: 'Flutter Developer & Software Engineer',
        location: 'Taxila, Pakistan (Remote Available)',
        availableForWork: true,
        responseTime: 'Usually within 24 hours'
    },
    contact: {
        email: 'mhabibullah.dev@gmail.com',
        phone: '+92 302 7531399',
        whatsapp: '+923027531399'
    },
    social: {
        github: 'https://github.com/Habib-34',
        linkedin: 'https://linkedin.com/in/habib34/',
        fiverr: '',
        upwork: ''
    },
    assets: {
        cvDownloadLink: '#', // Replace with actual CV download link
        profileImage: 'images/Flutter Developer.png'
    }
};

// Contact Items Configuration
const contactItems = [
    {
        icon: 'fas fa-envelope',
        title: 'Email',
        getValue: () => contactData.contact.email,
        getLink: () => `mailto:${contactData.contact.email}`,
        clickable: true
    },
    {
        icon: 'fab fa-whatsapp',
        title: 'WhatsApp',
        getValue: () => contactData.contact.phone,
        getLink: () => `https://wa.me/${contactData.contact.whatsapp.replace(/[^0-9]/g, '')}`,
        clickable: true
    },
    {
        icon: 'fas fa-phone',
        title: 'Phone',
        getValue: () => contactData.contact.phone,
        getLink: () => `tel:${contactData.contact.phone}`,
        clickable: true
    },
    {
        icon: 'fas fa-map-marker-alt',
        title: 'Location',
        getValue: () => contactData.personal.location,
        getLink: () => null,
        clickable: false
    }
];

// Social Links Configuration
const socialLinks = [
    {
        icon: 'fab fa-github',
        title: 'GitHub',
        getUrl: () => contactData.social.github,
        isEnabled: () => contactData.social.github !== ''
    },
    {
        icon: 'fab fa-linkedin',
        title: 'LinkedIn',
        getUrl: () => contactData.social.linkedin,
        isEnabled: () => contactData.social.linkedin !== ''
    },
    {
        icon: 'fab fa-whatsapp',
        title: 'WhatsApp',
        getUrl: () => `https://wa.me/${contactData.contact.whatsapp.replace(/[^0-9]/g, '')}`,
        isEnabled: () => contactData.contact.whatsapp !== ''
    },
    {
        icon: 'fas fa-envelope',
        title: 'Email',
        getUrl: () => `mailto:${contactData.contact.email}`,
        isEnabled: () => contactData.contact.email !== ''
    }
];

// Services offered
const servicesOffered = [
    'Flutter Mobile App Development',
    'Cross-platform Solutions',
    'UI/UX Implementation',
    'API Integration & Backend',
    'Code Review & Consultation',
    'Technical Support & Maintenance'
];