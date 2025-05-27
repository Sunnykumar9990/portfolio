document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');

    // Function to apply the saved theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Default to light mode if no theme is saved
        applyTheme('light');
    }

    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            applyTheme('dark');
            localStorage.setItem('portfolioTheme', 'dark');
        } else {
            applyTheme('light');
            localStorage.setItem('portfolioTheme', 'light');
        }
    });
});