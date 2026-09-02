// البيانات المركزية
const projectsData = [
    { 
        id: 1, 
        title: "Pixel Art VAE",
        description: "Pixel Art VAE - a disentangled Variational Autoencoder for high-fidelity pixel art generation, with patch-based latent interpretability, beta-annealing, and Jacobian sensitivity analysis.",
        details: "This project focuses on developing a disentangled Variational Autoencoder (VAE) specifically designed for generating high-quality pixel art. The model incorporates patch-based latent interpretability, allowing for better understanding of the learned representations. Additionally, it employs beta-annealing techniques to improve training stability and utilizes Jacobian sensitivity analysis to assess the robustness of the generated outputs.",
        link: "projects/project1.html"
    },
    { 
        id: 2, 
        title: "The Golden Age of Theory",
        description: "The Golden Age of Theory - a data-driven investigation into how Transformer theory rewired AI between 2019-2022, using Google Trends, arXiv, and Meta Kaggle data",
        details: "This project explores the transformative impact of Transformer models on the field of artificial intelligence during the period from 2019 to 2022. By analyzing data from Google Trends, arXiv publications, and Meta Kaggle competitions, the study provides insights into how Transformer theory has influenced research directions, model development, and practical applications in AI.",
        link: "projects/project2.html"
    },

];

const datasetsData = [
    { 
        id: 1, 
        name: "PubChem Dataset", 
        size: "181.48GB", 
        color: "#6688ff",
        details: "Comprehensive chemical compound data including molecular structures, properties, and experimental results.",
        link: "datasets/dataset1.html"
    },
    { 
        id: 2, 
        name: "The Dream Dictionary", 
        size: "3.5MB", 
        color: "#66ddaa",
        details: "Preprocessed audio feature vectors extracted from thousands of audio samples using advanced signal processing.",
        link: "datasets/dataset2.html"  // نفس الصفحة بالفترة الحالية
    },
    { 
        id: 3, 
        name: "Arabian Diwan", 
        size: "55MB", 
        color: "#f7ea3fd8",
        details: "Curated collection of pixel art and low-resolution images for generative model training.",
        link: "datasets/dataset3.html"  // نفس الصفحة بالفترة الحالية
    }
];