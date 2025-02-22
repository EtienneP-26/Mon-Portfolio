document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        { title: "Detecteur de CO2 sur carte arduino", description: "Durant mon stage de 1ère, sur une carte arduino en c/c++, dans une entreprise de cyber sécurtité médical.", image: "assets/images/github.png", link: "https://github.com/EtienneP-26/CO_detector" },
        { title: "Projet 2", description: "Description du projet 2", image: "assets/images/github.png", link: "https://github.com/EtienneP-26/epi-theme" },
        { title: "Projet 3", description: "Description du projet 3", image: "assets/images/github.png", link: "https://github.com/EtienneP-26/epi-theme" },
        { title: "Projet 4", description: "Description du projet 4", image: "assets/images/github.png", link: "https://github.com/EtienneP-26/epi-theme" },
    ];

    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const projectHTML = `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card shadow-sm">
                    <img src="${project.image}" class="card-img-top" alt="${project.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <a href="${project.link}" class="btn btn-primary">Voir le projet</a>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });

    // Animation de défilement
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const navbarToggler = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('header nav ul');

    if (navbarToggler && navMenu) {
        navbarToggler.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    }
});