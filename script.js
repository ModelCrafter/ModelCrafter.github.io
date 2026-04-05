const galaxy = document.getElementById('galaxy-container');
const bgStarCount = 350;
const asteroidCount = 8;
const navBtns = document.querySelectorAll('.nav-btn');

const projects = [
    { id: 1, title: "Chemical Encoder", file: "project1.html" },
    { id: 2, title: "Blender LLM", file: "project2.html" },
    { id: 3, title: "BirdCLEF Audio Model", file: "project3.html" },
    { id: 4, title: "Ancient Language FM", file: "project4.html" },
    { id: 5, title: "Pixel Art VAE", file: "project5.html" }
];

const datasets = [
    { id: 1, name: "Market Trends", size: "4GB", color: "#6688ff" },
    { id: 2, name: "Audio Features", size: "8GB", color: "#66ddaa" },
    { id: 3, name: "Pixel Dataset", size: "2GB", color: "#dd66ff" },
    { id: 4, name: "Language Corpus", size: "15GB", color: "#66ccff" },
    { id: 5, name: "Chemical Data", size: "6GB", color: "#ffcc66" }
];

function getRandomPositionFull() {
    // توزيع في الشاشة كاملة مع تجنب الـ hero section
    let x, y;
    do {
        x = Math.random() * 95 + 2.5;
        y = Math.random() * 95 + 2.5;
    } while (y > 35 && y < 55 && x > 35 && x < 65); // تجنب الـ hero
    
    return { x, y };
}

function createBgStars() {
    for (let i = 0; i < bgStarCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-bg';
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
    // أسترويدات تطير عشوائياً
    const asteroidPaths = [
        // من اليسار إلى اليمين
        { startX: -5, startY: 20, endX: 105, endY: 25, duration: 8 + Math.random() * 4 },
        { startX: -5, startY: 45, endX: 105, endY: 40, duration: 10 + Math.random() * 3 },
        { startX: -5, startY: 70, endX: 105, endY: 75, duration: 9 + Math.random() * 4 },
        // من الأعلى إلى الأسفل
        { startX: 30, startY: -5, endX: 35, endY: 105, duration: 11 + Math.random() * 3 },
        { startX: 60, startY: -5, endX: 55, endY: 105, duration: 9 + Math.random() * 4 },
        { startX: 85, startY: -5, endX: 80, endY: 105, duration: 10 + Math.random() * 3 },
        // مسارات قطرية
        { startX: -5, startY: -5, endX: 105, endY: 105, duration: 12 + Math.random() * 4 },
        { startX: 105, startY: -5, endX: -5, endY: 105, duration: 13 + Math.random() * 3 }
    ];

    asteroidPaths.forEach((path, index) => {
        const asteroid = document.createElement('div');
        const size = Math.random() * 6 + 2; // حجم عشوائي 2-8 px
        const delay = index * 2 + Math.random() * 3; // تأخير عشوائي للبدء
        
        asteroid.className = 'asteroid';
        asteroid.style.width = size + 'px';
        asteroid.style.height = size + 'px';
        asteroid.style.left = path.startX + '%';
        asteroid.style.top = path.startY + '%';
        asteroid.style.background = '#b4b4c8';
        asteroid.style.animationDuration = path.duration + 's';
        asteroid.style.animationDelay = delay + 's';
        asteroid.style.setProperty('--start-x', path.startX + '%');
        asteroid.style.setProperty('--start-y', path.startY + '%');
        asteroid.style.setProperty('--end-x', path.endX + '%');
        asteroid.style.setProperty('--end-y', path.endY + '%');
        
        // إضافة animation keyframes ديناميكية
        const keyframes = `
            @keyframes asteroidPath${index} {
                0% {
                    left: ${path.startX}%;
                    top: ${path.startY}%;
                }
                100% {
                    left: ${path.endX}%;
                    top: ${path.endY}%;
                }
            }
        `;
        
        // إنشاء style tag للـ keyframes
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        
        asteroid.style.animation = `asteroidPath${index} ${path.duration}s linear infinite`;
        
        galaxy.appendChild(asteroid);
    });
}

function createSun(project) {
    const body = document.createElement('div');
    const pos = getRandomPositionFull();
    body.className = 'celestial-body sun';
    body.style.left = pos.x + '%';
    body.style.top = pos.y + '%';
    body.style.transform = 'translate(-50%, -50%)';

    const core = document.createElement('div');
    core.className = 'sun-core';

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = '☀️ SUN_0' + project.id + '<br>' + project.title;

    body.appendChild(core);
    body.appendChild(tooltip);
    
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
    body.appendChild(tooltip);

    galaxy.appendChild(body);
}

function init() {
    createBgStars();
    createAsteroids(); // إضافة الأسترويدات
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