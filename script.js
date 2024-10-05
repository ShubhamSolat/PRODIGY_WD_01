window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const toggleMenu = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
