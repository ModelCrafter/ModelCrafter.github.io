const galaxy = document.getElementById('galaxy-container');
const bgStarCount = 250;
const navBtns = document.querySelectorAll('.nav-btn');

const projects = [
    { id: 1, title: "Chemical Encoder", file: "project1.html" },
    { id: 2, title: "Blender LLM", file: "project2.html" },
    { id: 3, title: "BirdCLEF Audio Model", file: "project3.html" },
    { id: 4, title: "Ancient Language FM", file: "project4.html" },
    { id: 5, title: "Pixel Art VAE", file: "project5.html" }
];

function getRandomPosition() {
    return {
        x: Math.random() * 85 + 7.5,
        y: Math.random() * 85 + 7.5
    };
}

function createBgStars() {
    for (let i = 0; i < bgStarCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-bg';
        const pos = getRandomPosition();
        const size = Math.random() * 2.5 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = pos.x + '%';
        star.style.top = pos.y + '%';
        star.style.animationDelay = (Math.random() * 3) + 's';
        galaxy.appendChild(star);
    }
}

function createSun(project) {
    const body = document.createElement('div');
    const pos = getRandomPosition();
    body.className = 'celestial-body';
    body.style.left = pos.x + '%';
    body.style.top = pos.y + '%';
    body.style.transform = 'translate(-50%, -50%)';

    const core = document.createElement('div');
    core.className = 'sun-core';

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = '> SUN_' + '0' + project.id + '<br>> ' + project.title;

    body.appendChild(core);
    body.appendChild(tooltip);
    
    body.addEventListener('click', function() {
        window.location.href = project.file;
    });

    galaxy.appendChild(body);
}

function init() {
    createBgStars();
    projects.forEach(function(project) {
        createSun(project);
    });
}

navBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const nav = btn.getAttribute('data-nav');
        const pages = {
            'signal': 'signal.html',
            'projects': 'projects.html',
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