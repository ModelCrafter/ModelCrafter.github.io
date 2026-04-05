const galaxy = document.getElementById('galaxy-container');
const bgStarCount = 250; // كثافة نجوم خلفية عالية

// ألوان كواكب مريحة ومدمجة (Datasets)
const planetColors = [
    'radial-gradient(circle, #4facfe 0%, #00f2fe 100%)', // Ice Blue
    'radial-gradient(circle, #b1faff 0%, #6d81fe 100%)', // Soft Purple
    'radial-gradient(circle, #00cdac 0%, #8ddad5 100%)', // Teal
    'radial-gradient(circle, #fad0c4 0%, #ff9a9e 100%)', // Soft Pink
];

// --- DATA: PROJECTS (Will be Suns) ---
const projects = [
    { id: 1, title: "Chemical Encoder", file: "project1.html" },
    { id: 2, title: "Blender LLM", file: "project2.html" },
    { id: 3, title: "BirdCLEF Audio", file: "project3.html" },
    { id: 4, title: "Ancient Lang FM", file: "project4.html" },
    { id: 5, title: "Pixel Art VAE", file: "project5.html" },
];

// --- DATA: DATASETS (Will be Planets) ---
const datasets = [
    { id: 1, title: "Astro Imagery DB", file: "data1.html" },
    { id: 2, title: "NLP Corpuses", file: "data2.html" },
    { id: 3, title: "Audio Features Metadata", file: "data3.html" },
    { id: 4, title: "Simulated Physics Logs", file: "data4.html" },
    { id: 5, title: "Tabular Metrics", file: "data5.html" },
];

function getRandomPosition() {
    // تجنب السنتر المزدحم بالاسم وتجنب الحواف
    return {
        x: Math.random() * 85 + 7.5,
        y: Math.random() * 75 + 12.5
    };
}

// 1. إنشاء نجوم الخلفية
function createBgStars() {
    for (let i = 0; i < bgStarCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-bg';
        const pos = getRandomPosition();
        const size = Math.random() * 2.5; // نجوم صغيرة جداً وكثيرة
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${pos.x}%`;
        star.style.top = `${pos.y}%`;
        // تأثير نبض عشوائي
        star.style.animationDelay = `${Math.random() * 3}s`;
        galaxy.appendChild(star);
    }
}

// 2. إنشاء الأجرام السماوية (شموس أو كواكب)
function createCelestialBody(data, type, index) {
    const pos = getRandomPosition();
    
    // حاوية الجسم (منطقة حساسة كبيرة)
    const bodySystem = document.createElement('div');
    bodySystem.className = 'celestial-body';
    bodySystem.style.left = `${pos.x}%`;
    bodySystem.style.top = `${pos.y}%`;
    
    // الجسم المرئي نفسه
    const core = document.createElement('div');
    
    // الـ Tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    if (type === 'project') {
        // إذا كان مشروع: اظهر الشمس
        core.className = 'sun-core';
        tooltip.innerHTML = `> SUN_0${data.id}<br>> ${data.title}`;
    } else if (type === 'dataset') {
        // إذا كان داتا سيت: اظهر الكوكب المدمج
        core.className = 'planet-core';
        // اختر لون كوكب مدمج من المصفوفة
        core.style.background = planetColors[index % planetColors.length];
        tooltip.innerHTML = `> PLANET_0${data.id}<br>> ${data.title}`;
    }
    
    // منطق التنقل عند الضغط
    bodySystem.addEventListener('click', () => {
        window.location.href = data.file;
    });

    // التجميع
    bodySystem.appendChild(core);
    bodySystem.appendChild(tooltip);
    galaxy.appendChild(bodySystem);
}

function initGalaxy() {
    createBgStars(); // أولاً النجوم الكثيرة في الخلفية
    
    // ثانياً: إنشاء الشموس للمشاريع (5 مشاريع)
    projects.forEach((project, index) => {
        createCelestialBody(project, 'project', index);
    });

    // ثالثاً: إنشاء الكواكب للداتا سيتس (5 داتا سيتس)
    datasets.forEach((dataset, index) => {
        createCelestialBody(dataset, 'dataset', index);
    });
}

// Big Bang!
initGalaxy();