function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
}

function displayLasModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
}


function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('show');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);

displayCurrentYear();
displayLasModifiedDate();