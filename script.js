const galaxy = document.getElementById('galaxy-container');
const bgStarCount = 200; // كترت النجوم الخلفية الصغيرة للعمق

// ألوان كواكب متجانسة ومريحة للعين (سايبر/جالاكسي)
const planetColors = [
    'radial-gradient(circle, #4facfe 0%, #00f2fe 100%)', // أزرق جليدي
    'radial-gradient(circle, #ff9a9e 0%, #fad0c4 100%)', // وردي سديمي
    'radial-gradient(circle, #b1faff 0%, #6d81fe 100%)', // بنفسجي فاتح
    'radial-gradient(circle, #00cdac 0%, #8ddad5 100%)', // فيروزي
    'radial-gradient(circle, #fcb045 0%, #fd1d1d 100%, #833ab4 100%)', // غازي برتقالي
];

// Project Array (10 HTML Files as requested)
const projects = [
    { id: 1, title: "Chemical Encoder", file: "project1.html" },
    { id: 2, title: "Blender LLM", file: "project2.html" },
    { id: 3, title: "BirdCLEF Audio Model", file: "project3.html" },
    { id: 4, title: "Ancient Language FM", file: "project4.html" },
    { id: 5, title: "Pixel Art VAE", file: "project5.html" },
    { id: 6, title: "Market Eval Metrics", file: "project6.html" },
    { id: 7, title: "Custom Loss GAN", file: "project7.html" },
    { id: 8, title: "TF Data Pipeline", file: "project8.html" },
    { id: 9, title: "Diffusion Synthesis", file: "project9.html" },
    { id: 10, title: "Deep Tech Prototype", file: "project10.html" }
];

function getRandomPosition() {
    // تجنب الأطراف تماماً وتجنب السنتر المزدحم بالاسم
    return {
        x: Math.random() * 80 + 10,
        y: Math.random() * 70 + 15
    };
}

// إنشاء النجوم الخلفية الصغيرة جداً
function createBgStars() {
    for (let i = 0; i < bgStarCount; i++) {
        const star = document.createElement('div');
        star.className = 'star-bg';
        const pos = getRandomPosition();
        const size = Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${pos.x}%`;
        star.style.top = `${pos.y}%`;
        // إضافة تباين عشوائي خفيف في الشفافية
        star.style.opacity = Math.random() * 0.5;
        galaxy.appendChild(star);
    }
}

// إنشاء نظام الكوكب (المشروع)
function createPlanet(projectData, index) {
    const pos = getRandomPosition();
    
    // 1. الحاوية (Hit Area)
    const system = document.createElement('div');
    system.className = 'planet-system';
    system.style.left = `${pos.x}%`;
    system.style.top = `${pos.y}%`;
    
    // 2. الكوكب المرئي
    const core = document.createElement('div');
    core.className = 'planet-core';
    // اختيار لون عشوائي من المصفوفة المتجانسة
    core.style.background = planetColors[index % planetColors.length];
    
    // إضافة تأخير عشوائي للأنيميشن عشان ميبقوش شبه بعض
    core.style.animationDelay = `${Math.random() * 5}s`;

    // 3. التول تيب (الاسم)
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `> ID: 0${projectData.id}<br>> ${projectData.title}`;
    
    // منطق التنقل
    system.addEventListener('click', () => {
        window.location.href = projectData.file;
    });

    // التجميع
    system.appendChild(core);
    system.appendChild(tooltip);
    galaxy.appendChild(system);
}

function initGalaxy() {
    createBgStars(); // أولاً نجوم الخلفية
    projects.forEach((project, index) => {
        createPlanet(project, index); // ثم الكواكب فوقها
    });
}

// Big Bang
initGalaxy();