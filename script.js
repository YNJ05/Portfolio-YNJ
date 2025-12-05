/* =========================================
   1. Tab System
   ========================================= */
const navLinks = document.querySelectorAll('.nav-links li');
const sections = document.querySelectorAll('.tab-content');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));

        link.classList.add('active');
        const targetId = link.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
        
        document.querySelector('.main-content').scrollTo({ top: 0, behavior: 'smooth' });
    });
});

/* =========================================
   2. Typewriter Effect
   ========================================= */
const texts = ["Engineering Student", "Cloud & IoT Enthusiast", "DevOps Aspiring", "Full Stack Developer"];
let count = 0, index = 0, currentText = "", letter = "";

(function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.getElementById('typing-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++; index = 0; setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
})();

/* =========================================
   3. Theme & Langue
   ========================================= */
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
const icon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme') || 'dark';
htmlEl.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

function updateIcon(theme) {
    icon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

themeToggle.addEventListener('click', () => {
    const newTheme = htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

// Particles & EmailJS
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 50 },
            "size": { "value": 3 },
            "color": { "value": "#ffffff" },
            "line_linked": { "enable": true, "opacity": 0.15 },
            "move": { "speed": 1 }
        }
    });
}

(function() {
    if(typeof emailjs !== 'undefined') emailjs.init("6-qLSkjpsZkAg26A1");
})();

const form = document.getElementById('contact-form');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = document.getElementById('send-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        
        emailjs.sendForm("service_uz0a3w4", "template_k7pzjec", this)
        .then(() => { 
            alert('Message Sent!'); form.reset(); btn.textContent = originalText;
        }, () => {
            alert('Error'); btn.textContent = originalText;
        });
    });
}

// Translations
const translations = {
    fr: {
        "nav.about": "Profil", "nav.projects": "Projets", "nav.skills": "Compétences", "nav.contact": "Contact",
        "about.desc": "Étudiant ingénieur en Cloud & IoT à l’INPT. Spécialisé en systèmes distribués, virtualisation et robotique. Je conçois des solutions complètes, du capteur hardware au cloud.",
        "about.status": "Recherche Stage PFA (Fév 2025)",
        "skills.subtitle": "Technologies & Outils que je maîtrise",
        "educ.title": "Parcours Scolaire",
        "educ.inpt": "Ingénierie des Systèmes Ubiquitaires et Distribués (Cloud & IoT)",
        "educ.cpge": "Technologie et Sciences de l’Ingénieur (TSI)",
        "proj.openstack.title": "Cloud Privé OpenStack", "proj.openstack.desc": "Déploiement complet IaaS avec OpenStack Epoxy, KVM et gestion réseau.",
        "proj.micro.title": "TodoApp Microservices", "proj.micro.desc": "Architecture distribuée, Auth JWT, NestJS/Next.js, MongoDB.",
        "proj.iot.title": "GreenTech SmartBin", "proj.iot.desc": "IoT & Computer Vision : Détection d'objets, optimisation de trajets.",
        "proj.robot.title": "Grass Cutter Robot", "proj.robot.desc": "Robotique mobile : Asservissement PID, dimensionnement moteurs.",
        "contact.btn": "Envoyer", "hero.cv": "Télécharger CV"
    },
    en: {
        "nav.about": "Profile", "nav.projects": "Projects", "nav.skills": "Skills", "nav.contact": "Contact",
        "about.desc": "Cloud & IoT Engineering student at INPT. Specialized in distributed systems, virtualization, and robotics. I design end-to-end solutions, from hardware sensors to cloud infrastructure.",
        "about.status": "Looking for PFA Internship (Feb 2025)",
        "skills.subtitle": "Technologies & Tools I've Worked With",
        "educ.title": "Education Journey",
        "educ.inpt": "Ubiquitous Systems & Distributed Computing (Cloud & IoT)",
        "educ.cpge": "Technology and Engineering Sciences (TSI)",
        "proj.openstack.title": "Private Cloud OpenStack", "proj.openstack.desc": "Full IaaS deployment using OpenStack Epoxy, KVM, and networking.",
        "proj.micro.title": "TodoApp Microservices", "proj.micro.desc": "Distributed architecture, JWT Auth, NestJS/Next.js, MongoDB.",
        "proj.iot.title": "GreenTech SmartBin", "proj.iot.desc": "IoT & Computer Vision: Object detection, route optimization.",
        "proj.robot.title": "Grass Cutter Robot", "proj.robot.desc": "Mobile Robotics: PID Control systems, motor sizing.",
        "contact.btn": "Send Message", "hero.cv": "Download Resume"
    }
};

const langToggle = document.getElementById('lang-toggle');
let currentLang = 'en';

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    langToggle.textContent = currentLang.toUpperCase();
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
    });
});