const galaxy = document.getElementById('galaxy-container');
const bgStarCount = 250;
const navBtns = document.querySelectorAll('.nav-btn');

// ========== DATA ==========
const projects = [
    { id: 1, title: "Chemical Encoder", file: "project1.html" },
    { id: 2, title: "Blender LLM", file: "project2.html" },
    { id: 3, title: "BirdCLEF Audio Model", file: "project3.html" },
    { id: 4, title: "Ancient Language FM", file: "project4.html" },
    { id: 5, title: "Pixel Art VAE", file: "project5.html" }
];

const datasets = [
    { id: 1, name: "Market Trends", size: "4GB", color: "#4facfe" },
    { id: 2, name: "Audio Features", size: "8GB", color: "#b1faff" },
    { id: 3, name: "Pixel Dataset", size: "2GB", color: "#00cdac" },
    { id: 4, name: "Language Corpus", size: "15GB", color: "#fad0c4" },
    { id: 5, name: "Chemical Data", size: "6GB", color: "#ff9a9e" }
];

// ========== FUNCTIONS ==========
function getRandomPosition() {
    return {
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5
    };
}

function createBgStars() {
    for (let i = 0; i < bgStarCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-bg';
        const pos = getRandomPosition();
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${pos.x}%`;
        star.style.top = `${pos.y}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        galaxy.appendChild(star);
    }
}

function createCelestialBody(type, data) {
    const body = document.createElement('div');
    const pos = getRandomPosition();
    body.className = 'celestial-body';
    body.style.left = `${pos.x}%`;
    body.style.top = `${pos.y}%`;

    const core = document.createElement('div');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    if (type === 'sun') {
        core.className = 'sun-core';
        tooltip.innerHTML = `> PROJECT_0${data.id}<br>> ${data.title}`;
        body.addEventListener('click', () => {
            window.location.href = data.file;
        });
    } else if (type === 'planet') {
        core.className = 'planet-core';
        core.style.background = data.color;
        core.style.boxShadow = `0 0 15px 4px ${data.color}`;
        tooltip.innerHTML = `> DATA_0${data.id}<br>> ${data.name} (${data.size})`;
    }

    body.appendChild(core);
    body.appendChild(tooltip);
    galaxy.appendChild(body);
}

function initGalaxy() {
    createBgStars();
    projects.forEach(project => {
        createCelestialBody('sun', project);
    });
    datasets.forEach(dataset => {
        createCelestialBody('planet', dataset);
    });
}

// ========== NAVIGATION ==========
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const nav = btn.dataset.nav;
        const files = {
            signal: 'signal.html',
            projects: 'projects.html',
            datasets: 'datasets.html',
            init: 'init.html'
        };
        window.location.href = files[nav];
    });
});

// ========== INITIALIZE ==========
initGalaxy();