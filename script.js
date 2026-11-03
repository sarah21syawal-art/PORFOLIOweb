document.addEventListener('DOMContentLoaded', () => {
    
    // Feature 1: Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Feature 2: Dark / Light Mode Switcher
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    themeToggle.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-theme') === 'light') {
            htmlElement.removeAttribute('data-theme');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    // Check saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
    }

    // Feature 3: Active Link Highlighter on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    // Feature 4: Copy Email to Clipboard Feature
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const emailCopyFeedback = document.getElementById('emailCopyFeedback');

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const emailAddress = "maisarah@example.com"; // Replace with your actual email address
            
            navigator.clipboard.writeText(emailAddress).then(() => {
                emailCopyFeedback.style.display = 'block';
                setTimeout(() => {
                    emailCopyFeedback.style.display = 'none';
                }, 3000);
            }).catch(err => {
                console.error('Failed to copy email: ', err);
            });
        });
    }

    // Feature 5: Dynamic Greeting Banner Console Log
    console.log("%c Welcome to my Portfolio! ", "background: #58a6ff; color: #fff; padding: 5px; border-radius: 4px; font-weight: bold;");
});