
    body.addEventListener('click', function() {
        window.location.href = project.file;
    });

    galaxy.appendChild(body);
}

function createPlanet(dataset) {
    const body = document.createElement('div');
    const pos = getRandomPositionFull();
    body.className = 'celestial-body planet';
    body.style.left = pos.x + '%';
    body.style.top = pos.y + '%';
    body.style.transform = 'translate(-50%, -50%)';

    const core = document.createElement('div');
    core.className = 'planet-core';
    core.style.background = dataset.color;
    core.style.color = dataset.color;
    core.style.boxShadow = `inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 15px ${dataset.color}`;

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.style.borderColor = dataset.color;
    tooltip.style.color = dataset.color;
    tooltip.innerHTML = '🌍 DATA_0' + dataset.id + '<br>' + dataset.name + ' (' + dataset.size + ')';

    body.appendChild(core);
const galaxy = document.getElementById('galaxy-container');
const bgStarCount = 350;
const asteroidCount = 8;

const projects = projectsData.map(p => ({
    id: p.id,
    title: p.title,
    file: p.link
}));

const datasets = datasetsData.map(d => ({
    id: d.id,
    name: d.name,
    size: d.size,
    color: d.color,
    link: d.link
}));

const astronautMessages = [
    "I'm here to create",
    "Ready to push boundaries",
    "Let's build something great",
    "Passionate about AI and ML",
    "Transforming ideas into reality",
    "Always learning, always growing"
];

const forbiddenZone = {
    minX: 30,
    maxX: 70,
    minY: 30,
    maxY: 60
};

const safeBounds = {
    minX: 8,
    maxX: 92,
    minY: 12,
    maxY: 92,
    padding: 12
};

function isInForbiddenZone(x, y) {
    return (y > forbiddenZone.minY && y < forbiddenZone.maxY && 
            x > forbiddenZone.minX && x < forbiddenZone.maxX);
}

function getRandomPositionFull() {
    let x, y;
    let attempts = 0;
    do {
        x = Math.random() * (safeBounds.maxX - safeBounds.minX) + safeBounds.minX;
        y = Math.random() * (safeBounds.maxY - safeBounds.minY) + safeBounds.minY;
        attempts++;
    } while (isInForbiddenZone(x, y) && attempts < 20);
    
    return { x, y };
}

function createBgStars() {
    for (let i = 0; i < bgStarCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-bg';
        star.setAttribute('aria-hidden', 'true'); // decorative only, skip for screen readers
        const pos = { x: Math.random() * 100, y: Math.random() * 100 };
        const size = Math.random() * 1.5 + 0.3;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = pos.x + '%';
        star.style.top = pos.y + '%';
        star.style.animationDelay = (Math.random() * 2.5) + 's';
        galaxy.appendChild(star);
    }
}

function createAsteroids() {
    const asteroidPaths = [
        { startX: -5, startY: 20, endX: 105, endY: 25, duration: 8 + Math.random() * 4 },
        { startX: -5, startY: 45, endX: 105, endY: 40, duration: 10 + Math.random() * 3 },
        { startX: -5, startY: 70, endX: 105, endY: 75, duration: 9 + Math.random() * 4 },
        { startX: 30, startY: -5, endX: 35, endY: 105, duration: 11 + Math.random() * 3 },
        { startX: 60, startY: -5, endX: 55, endY: 105, duration: 9 + Math.random() * 4 },
        { startX: 85, startY: -5, endX: 80, endY: 105, duration: 10 + Math.random() * 3 },
        { startX: -5, startY: -5, endX: 105, endY: 105, duration: 12 + Math.random() * 4 },
        { startX: 105, startY: -5, endX: -5, endY: 105, duration: 13 + Math.random() * 3 }
    ];

    asteroidPaths.forEach((path, index) => {
        const asteroid = document.createElement('div');
        const size = Math.random() * 6 + 2;
        const delay = index * 2 + Math.random() * 3;
        
        asteroid.className = 'asteroid';
        asteroid.setAttribute('aria-hidden', 'true'); // decorative only
        asteroid.style.width = size + 'px';
        asteroid.style.height = size + 'px';
        asteroid.style.left = path.startX + '%';
        asteroid.style.top = path.startY + '%';
        asteroid.style.background = '#b4b4c8';
        asteroid.style.animationDuration = path.duration + 's';
        asteroid.style.animationDelay = delay + 's';
        
        const keyframes = `
            @keyframes asteroidPath${index} {
                0% { left: ${path.startX}%; top: ${path.startY}%; }
                100% { left: ${path.endX}%; top: ${path.endY}%; }
            }
        `;
        
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        
        asteroid.style.animation = `asteroidPath${index} ${path.duration}s linear infinite`;
        galaxy.appendChild(asteroid);
    });
}

function createSun(project) {
    // Real <a href> instead of a <div> with a click listener:
    // Google can now discover and index this project page, and it's
    // reachable by keyboard (Tab + Enter) and readable by screen readers.
    const body = document.createElement('a');
    body.href = project.file;
    const pos = getRandomPositionFull();
    body.className = 'celestial-body sun';
    body.style.left = pos.x + '%';
    body.style.top = pos.y + '%';
    body.style.transform = 'translate(-50%, -50%)';
    body.setAttribute('aria-label', project.title);

    const core = document.createElement('div');
    core.className = 'sun-core';

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.setAttribute('aria-hidden', 'true');
    tooltip.innerHTML = '☀️ SUN_0' + project.id + '<br>' + project.title;

    body.appendChild(core);
    body.appendChild(tooltip);

    galaxy.appendChild(body);
}

function createPlanet(dataset) {
    // Same idea as createSun: a real link, not a div + click handler.
    const body = document.createElement('a');
    body.href = dataset.link;
    const pos = getRandomPositionFull();
    body.className = 'celestial-body planet';
    body.style.left = pos.x + '%';
    body.style.top = pos.y + '%';
    body.style.transform = 'translate(-50%, -50%)';
    body.setAttribute('aria-label', dataset.name + ' dataset, ' + dataset.size);

    const core = document.createElement('div');
    core.className = 'planet-core';
    core.style.background = dataset.color;
    core.style.color = dataset.color;
    core.style.boxShadow = `inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 15px ${dataset.color}`;

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.setAttribute('aria-hidden', 'true');
    tooltip.style.borderColor = dataset.color;
    tooltip.style.color = dataset.color;
    tooltip.innerHTML = '🌍 DATA_0' + dataset.id + '<br>' + dataset.name + ' (' + dataset.size + ')';

    body.appendChild(core);
    body.appendChild(tooltip);

    galaxy.appendChild(body);
}

function createAstronaut() {
    // Real link to init.html instead of a div + click listener.
    const astronaut = document.createElement('a');
    astronaut.href = 'init.html';
    astronaut.className = 'astronaut';
    astronaut.setAttribute('aria-label', 'Init page');
    
    astronaut.innerHTML = `
        <svg width="50" height="60" viewBox="0 0 80 100" style="display: block;" aria-hidden="true">
            <polygon points="40,8 50,14 50,26 40,32 30,26 30,14" fill="currentColor" opacity="0.85"/>
            <polygon points="40,35 28,50 52,50" fill="currentColor" opacity="0.8"/>
            <polygon points="28,50 52,50 56,70 24,70" fill="currentColor" opacity="0.7"/>
            <polygon points="28,50 8,55 12,65" fill="currentColor" opacity="0.75"/>
            <polygon points="52,50 72,55 68,65" fill="currentColor" opacity="0.75"/>
            <polygon points="30,70 36,90 28,88" fill="currentColor" opacity="0.8"/>
            <polygon points="50,70 44,90 52,88" fill="currentColor" opacity="0.8"/>
        </svg>
    `;
    
    let x, y;
    do {
        x = Math.random() * 80 + 10;
        y = Math.random() * 70 + 15;
    } while (isInForbiddenZone(x, y));
    
    astronaut.style.left = x + '%';
    astronaut.style.top = y + '%';
    astronaut.style.transform = 'translate(-50%, -50%)';
    astronaut.style.color = '#a8c5ff';
    
    let vx = (Math.random() - 0.5) * 0.36;
    let vy = (Math.random() - 0.5) * 0.36;
    
    function animateAstronaut() {
        let currentX = parseFloat(astronaut.style.left);
        let currentY = parseFloat(astronaut.style.top);
        
        currentX += vx;
        currentY += vy;
        
        if (currentX < 5 || currentX > 95) vx = -vx;
        if (currentY < 5 || currentY > 95) vy = -vy;
        
        currentX = Math.max(5, Math.min(95, currentX));
        currentY = Math.max(5, Math.min(95, currentY));
        
        astronaut.style.left = currentX + '%';
        astronaut.style.top = currentY + '%';
        
        requestAnimationFrame(animateAstronaut);
    }
    
    animateAstronaut();
    
    let messageTimeout;
    
    function showRandomMessage() {
        const randomMsg = astronautMessages[Math.floor(Math.random() * astronautMessages.length)];
        const message = document.createElement('div');
        message.className = 'floating-message';
        message.setAttribute('aria-hidden', 'true');
        message.textContent = randomMsg;
        
        const msgX = parseFloat(astronaut.style.left);
        const msgY = parseFloat(astronaut.style.top);
        
        message.style.left = msgX + '%';
        message.style.top = (msgY - 6) + '%';
        message.style.transform = 'translate(-50%, -50%)';
        
        galaxy.appendChild(message);
        
        setTimeout(() => message.remove(), 3500);
        
        messageTimeout = setTimeout(showRandomMessage, 5000 + Math.random() * 5000);
    }
    
    showRandomMessage();
    
    galaxy.appendChild(astronaut);
}

function init() {
    createBgStars();
    createAsteroids();
    projects.forEach(function(project) {
        createSun(project);
    });
    datasets.forEach(function(dataset) {
        createPlanet(dataset);
    });
    createAstronaut();
}

// Note: the top nav (SIGNAL / PROJECTS / DATASETS / INIT) is now made of
// real <a href> elements directly in index.html, so no JS click-routing
// is needed for it anymore.

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}