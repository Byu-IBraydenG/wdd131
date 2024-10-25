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
    const hamburgerIcon = document.querySelector('.hamburger');

    navMenu.classList.toggle('show');

    if (navMenu.classList.contains('show')) {
        hamburgerIcon.textContent = 'X';
    } else {
        hamburgerIcon.textContent = '☰';
    }
}

function handleResize() {
    const navMenu = document.querySelector('nav ul');
    const hamburgerIcon = document.querySelector('.hamburger');

    if (window.innerWidth > 768) {
        navMenu.classList.remove('show');
        hamburgerIcon.style.display = 'none';
        navMenu.style.display = 'flex';
    } else {
        hamburgerIcon.style.display = 'block';
        navMenu.style.display = '';
    }
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);
window.addEventListener('resize', handleResize);

displayCurrentYear();
displayLasModifiedDate();
handleResize();

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
];

temples.push(
    {
        templeName: "Salt Lake City",
        location: "Salt lake City, Utah, Untied States",
        dedicated: "1983, april, 6",
        area: 250000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },

    {
        templeName: "Helsikni Finland",
        location: "Helsinki, Finland",
        dedicated: "2006, October, 15",
        area: 17000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/helsinki-finland/400x225/helsinki-finland-temple-lds-354498-wallpaper.jpg"
    },

    {
        templeName: "Bern Switzerland",
        location: "Berlin, Switzerland",
        dedicated: "11, September, 1955",
        area: 35546,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/ber-switzerland-temple-lds-903376-wallpaper.jpg"
    },
);

function displayTemples(filter = 'all') {
    const templeList = document.getElementById('temple-list');
    templeList.innerHTML = '';

    const filteredtemples = temples.filter(temple => {
        if (filter === 'old') return new Date(temple.dedicated).getFullYear() < 1999;
        if (filter === 'new') return new Date(temple.dedicated).getFullYear() > 2000;
        if (filter === 'large') return temple.area > 90000;
        if (filter === 'small') return temple.area < 90000;
        return true;
    });

    filteredtemples.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

        templeCard.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        templeList.appendChild(templeCard);
    });
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = event.target.getAttribute('data-filter');
        displayTemples(filter);
    });
});

displayTemples();