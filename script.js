const galaxy = document.getElementById('galaxy-container');
const bgStarCount = 120; // عدد النجوم الخلفية

// Quotes for the void
const quotes = [
    "The world is a complex equation",
    "Between numbers and data we draw",
    "Latent space holds the unseen",
    "Pixels are just low-res atoms",
    "Optimizing the void..."
];

// Project Array (10 HTML Files)
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
    // Limits percentage to avoid stars spawning off-screen or hiding under the sidebar
    return {
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5
    };
}

function createStar(type, data) {
    const star = document.createElement('div');
    const pos = getRandomPosition();
    
    star.style.left = `${pos.x}%`;
    star.style.top = `${pos.y}%`;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    if (type === 'bg') {
        star.className = 'star star-bg';
        // Randomize twinkle delay so they don't blink in sync
        star.style.animationDelay = `${Math.random() * 3}s`;
        tooltip.innerText = data;
    } else if (type === 'project') {
        star.className = 'star star-project';
        tooltip.innerHTML = `> PROJECT_0${data.id}<br>> ${data.title}`;
        
        // Navigation logic on click
        star.addEventListener('click', () => {
            window.location.href = data.file;
        });
    }

    star.appendChild(tooltip);
    galaxy.appendChild(star);
}

function initGalaxy() {
    // 1. Spawn Background Stars
    for (let i = 0; i < bgStarCount; i++) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        createStar('bg', randomQuote);
    }

    // 2. Spawn Project Stars
    projects.forEach(project => {
        createStar('project', project);
    });
}

// Big Bang!
initGalaxy();