window.addEventListener('scroll', () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});


const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

