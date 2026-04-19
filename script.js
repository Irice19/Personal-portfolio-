const portfolioData = {
    name: "Thabile Ndhlovu",
    role: "Aspiring software developer",
    email: "thabilendhlovu003@gmail.com",
    location: "Pretoria, Gauteng, South Africa",
    phone: "+27 79 660 7516",
    linkedin: "https://www.linkedin.com/in/thabile-ndhlovu-744230259/",
    bio: [
       "I am a results-driven IT graduate and aspiring Software Developer with a strong foundation in full-stack development. I specialize in building scalable, user-centric applications using modern frameworks and industry-standard practices.",
        "My expertise spans across frontend design and robust backend architecture, allowing me to bridge the gap between complex logic and seamless user experiences. I am passionate about creating software that is functional, efficient, and impactful.",
        "I am deeply committed to continuous learning and technical excellence. Whether I am optimizing database queries or crafting responsive interfaces, my goal is to deliver clean, efficient code that solves meaningful problems."
    ],
    skills: [
    { 
        category: "Software Engineering & Languages", 
        items: ["Java", "Python", "C#", "C++", "JavaScript", "TypeScript"] 
    },
    { 
        category: "Full-Stack Development", 
        items: ["React", "Node.js", "Angular", "Prisma ORM", "HTML5 & CSS3"] 
    },
    { 
        category: "System Design & Databases", 
        items: ["PostgreSQL", "MySQL", "SQL", "ERD Modeling", "Database Design", "DBeaver"] 
    },
    { 
        category: "Core Computer Science", 
        items: ["Algorithms", "Data Structures", "Memory Management", "CPU Scheduling", "SDLC"] 
    },
    { 
        category: "DevOps & Infrastructure", 
        items: ["Linux", "Git", "GitHub", "Postman", "RESTful APIs"] 
    },
    { 
        category: "Professional Strengths", 
        items: ["Problem Solving", "Debugging", "Communication", "Collaboration"] 
    }
],
    projects: [
        {
            title: "Weather Forecast App",
            color: "border-pink",
            desc: "Real-time weather application utilizing the OpenWeatherMap API to provide accurate forecasts based on user location.",
            tags: ["JavaScript", "Fetch API", "CSS3", "HTML5"],
            link: "https://irice19.github.io/WeatherApp/"
        },
        {
            title: "Personal Portfolio",
            color: "border-blue",
            desc: "A responsive professional portfolio featuring dynamic content injection and smooth intersection animations.",
            tags: ["JavaScript", "CSS Grid", "Interactivity"],
            link: "https://github.com/Irice19/Personal-portfolio-"
        }
    ]
};

function renderPortfolio() {
    document.getElementById('navbar').innerHTML = `
        <ul>
            <li><a href="#hero">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>`;

    document.getElementById('hero').innerHTML = `
        <img src="images/WhatsApp Image 2026-02-06 at 15.32.27.jpeg" class="profile-photo" alt="${portfolioData.name}">
        <div class="header-text">
            <p class="subtitle"></p>
            <h1>Hi, I am ${portfolioData.name}</h1>
            <div id="about" class="description">
                ${portfolioData.bio.map(p => `<p>${p}</p>`).join('')}
            </div>
        </div>`;

    document.getElementById('skills-grid').innerHTML = portfolioData.skills.map(s => `
        <div class="skill-card">
            <h3>${s.category}</h3>
            <div class="pill-container">
                ${s.items.map(i => `<span class="pill">${i}</span>`).join('')}
            </div>
        </div>`).join('');

    document.getElementById('projects-grid').innerHTML = portfolioData.projects.map(p => `
        <div class="project-card">
            <div class="card-border-top ${p.color}"></div>
            <div class="project-content">
                <h3>${p.title}</h3>
                <p class="project-desc">${p.desc}</p>
                <div class="project-tags">
                    ${p.tags.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
            <div class="project-links">
                <a href="${p.link}" target="_blank">View Code →</a>
            </div>
        </div>`).join('');

    document.getElementById('contact').innerHTML = `
        <h2 class="section-title">Contact Me</h2>
        <div class="contact-wrapper">
            <div class="contact-info-card">
                <h3>Get in Touch</h3>
                <div class="info-item">📍 ${portfolioData.location}</div>
                <div class="info-item">📞 ${portfolioData.phone}</div>
                <div class="info-item">✉️ ${portfolioData.email}</div>
            </div>
            <div class="contact-form-card">
                <form action="mailto:${portfolioData.email}" method="post" enctype="text/plain">
                    <input type="text" name="Name" placeholder="Your Name" required>
                    <textarea name="Message" rows="4" placeholder="Your Message" required></textarea>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>`;

    document.getElementById('footer').innerHTML = `
        <div class="social-links">
            <a href="${portfolioData.linkedin}" target="_blank">LinkedIn</a>
        </div>
        <p class="copyright">&copy; 2026 ${portfolioData.name}. All rights reserved.</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
    renderPortfolio();

    const textElement = document.querySelector(".subtitle");
    let textIndex = 0;
    function typeEffect() {
        if (textIndex < portfolioData.role.length) {
            textElement.innerHTML += portfolioData.role.charAt(textIndex);
            textIndex++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        });
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .contact-info-card, .contact-form-card');
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
        revealObserver.observe(el);
    });
});
