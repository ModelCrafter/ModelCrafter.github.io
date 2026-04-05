const galaxy = document.getElementById('galaxy-container');
const bgStarCount = 300;
const navBtns = document.querySelectorAll('.nav-btn');

const projects = [
    { id: 1, title: "Chemical Encoder", file: "project1.html" },
    { id: 2, title: "Blender LLM", file: "project2.html" },
    { id: 3, title: "BirdCLEF Audio Model", file: "project3.html" },
    { id: 4, title: "Ancient Language FM", file: "project4.html" },
    { id: 5, title: "Pixel Art VAE", file: "project5.html" }
];

const datasets = [
    { id: 1, name: "Market Trends", size: "4GB", color: "#0088ff" },
    { id: 2, name: "Audio Features", size: "8GB", color: "#00ff99" },
    { id: 3, name: "Pixel Dataset", size: "2GB", color: "#ff00ff" },
    { id: 4, name: "Language Corpus", size: "15GB", color: "#00ffff" },
    { id: 5, name: "Chemical Data", size: "6GB", color: "#ffff00" }
];

function getRandomPositionSafe() {
    // توزيع ذكي بحيث لا يخرج من الحدود
    return {
        x: Math.random() * 75 + 10,  // بين 10% و 85%
        y: Math.random() * 70 + 15   // بين 15% و 85%
    };
}

function createBgStars() {
    for (let i = 0; i < bgStarCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-bg';
        const pos = getRandomPositionSafe();
        const size = Math.random() * 2 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = pos.x + '%';
        star.style.top = pos.y + '%';
        star.style.animationDelay = (Math.random() * 2) + 's';
        galaxy.appendChild(star);
    }
}

function createSun(project) {
    const body = document.createElement('div');
    const pos = getRandomPositionSafe();
    body.className = 'celestial-body sun';
    body.style.left = pos.x + '%';
    body.style.top = pos.y + '%';
    body.style.transform = 'translate(-50%, -50%)';

    const core = document.createElement('div');
    core.className = 'sun-core';

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = '☀️ PROJECT_0' + project.id + '<br>' + project.title;

    body.appendChild(core);
    body.appendChild(tooltip);
    
    body.addEventListener('click', function() {
        window.location.href = project.file;
    });

    galaxy.appendChild(body);
}

function createPlanet(dataset) {
    const body = document.createElement('div');
    const pos = getRandomPositionSafe();
    body.className = 'celestial-body planet';
    body.style.left = pos.x + '%';
    body.style.top = pos.y + '%';
    body.style.transform = 'translate(-50%, -50%)';

    const core = document.createElement('div');
    core.className = 'planet-core';
    core.style.background = dataset.color;
    core.style.color = dataset.color;

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.style.borderColor = dataset.color;
    tooltip.style.color = dataset.color;
    tooltip.innerHTML = '🌍 DATA_0' + dataset.id + '<br>' + dataset.name + ' (' + dataset.size + ')';

    body.appendChild(core);
    body.appendChild(tooltip);

    galaxy.appendChild(body);
}

function init() {
    createBgStars();
    projects.forEach(function(project) {
        createSun(project);
    });
    datasets.forEach(function(dataset) {
        createPlanet(dataset);
    });
}

navBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const nav = btn.getAttribute('data-nav');
        const pages = {
            'signal': 'signal.html',
            'projects': 'projects.html',
            'datasets': 'datasets.html',
            'init': 'init.html'
        };
        if (pages[nav]) {
            window.location.href = pages[nav];
        }
    });
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}