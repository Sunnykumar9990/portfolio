document.addEventListener('DOMContentLoaded', () => {
    // Example: Toggle navigation menu
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Example: Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll to top on navigation link click
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            window.scrollTo(0, 0);
        });
    });
});