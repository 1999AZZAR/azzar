// Array of skills
const skills = [
    // Core Software Development
    "Programming", "Python", "C++", "C#", "Rust", "TypeScript", "JavaScript",
    "HTML", "CSS", "Git", "Version Control",

    // Web Technologies
    "Web", "Full-stack", "Backend", "React.js", "Vue.js", "Angular",
    "Tailwind CSS", "Bootstrap", "Flask", "Django", "GraphQL",

    // Infrastructure & DevOps
    "DevOps", "Docker", "Kubernetes", "Linux", "Cloud Computing",
    "AWS", "Azure", "Firebase", "Cloud Services",

    // Data & AI
    "Machine Learning", "AI", "Data Science", "Deep Learning",
    "TensorFlow", "Computer Vision", "Natural Language Processing",
    "Big Data", "Hadoop", "Spark", "Voice Recognition",

    // IoT & Embedded
    "IoT", "Microcontrollers", "Embedded Systems", "Arduino",
    "Raspberry Pi", "Electronics", "Computer Hardware",

    // Database & Security
    "Database Management", "SQL", "NoSQL", "Cybersecurity",
    "Networking", "API Design",

    // Engineering & Design
    "Robotics", "Control Systems", "UI/UX Design", "3D Printing",
    "CAD Design", "Figma", "Prototyping", "Photography",

    // Project Management & Soft Skills
    "Project Manager", "Technical Writing", "Agile Methodologies",
    "SCRUM", "Leadership", "Team Management", "Creative Thinking",
    "Problem Solving", "Critical Thinking",

    // Sustainable Tech
    "Sustainability", "Renewable Energy", "Solar Panels",
    "Power Management", "HVAC Systems", "Electric Vehicles",
    "Smart Cities"
];

class SkillsRotator {
    constructor(containerId, skills) {
        this.container = document.getElementById(containerId);
        this.skills = skills;
        this.currentElement = null;
        this.nextElement = null;
    }

    getRandomSkills(count = 3) {
        const shuffled = [...this.skills].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    createSkillElement(skills) {
        const div = document.createElement('div');
        div.className = 'skill-text';
        div.textContent = skills.join(' • ');
        return div;
    }

    async rotate() {
        // Remove old inactive element
        if (this.currentElement?.classList.contains('inactive')) {
            this.container.removeChild(this.currentElement);
        }

        // Move current to inactive
        if (this.nextElement) {
            this.currentElement = this.nextElement;
            this.currentElement.classList.remove('active');
            this.currentElement.classList.add('inactive');
        }

        // Create and show new element
        const randomSkills = this.getRandomSkills();
        this.nextElement = this.createSkillElement(randomSkills);
        this.container.appendChild(this.nextElement);

        // Trigger reflow
        void this.nextElement.offsetWidth;

        // Activate new element
        this.nextElement.classList.add('active');
    }

    start(interval = 3000) {
        this.rotate();
        setInterval(() => this.rotate(), interval);
    }
}

// Initialize and start the rotator
const rotator = new SkillsRotator('skills-wrapper', skills);
rotator.start(2500);
