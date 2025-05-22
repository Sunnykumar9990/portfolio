// script.js - Smooth scroll, animations, and dynamic project cards

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash && document.querySelector(this.hash)) {
                e.preventDefault();
                document.querySelector(this.hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate on scroll
    const animateEls = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    animateEls.forEach(el => observer.observe(el));

    // Dynamic GitHub projects (replace 'your-github-username' with your username)
    if (document.getElementById('projectsGrid')) {
        fetch('https://api.github.com/users/your-github-username/repos')
            .then(res => res.json())
            .then(repos => {
                const grid = document.getElementById('projectsGrid');
                repos.slice(0, 6).forEach(repo => {
                    const card = document.createElement('div');
                    card.className = 'project-card animate';
                    card.innerHTML = `
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'No description provided.'}</p>
                        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                    `;
                    grid.appendChild(card);
                });
                // Re-apply animation observer
                document.querySelectorAll('.project-card.animate').forEach(el => observer.observe(el));
            });
    }

    // Contact form handler (demo only)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('formMessage').textContent = 'Thank you for your message! (Demo only)';
            contactForm.reset();
        });
    }
});
