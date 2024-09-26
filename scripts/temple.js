document.getElementById('lastModified').textContent = document.lastModified;

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger/addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰';
});