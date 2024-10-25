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
        templeName: "Oqurrih Mountain",
        location: "South Jordan, Utah, United States",
        dedicated: "21 August, 2009",
        area: 60000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oquirrh-mountain-utah/400x250/oquirrh-mountain-utah-temple-1012337-high-res-print.jpg",
        description: "This temple holds many memroies for me, this the first temple I went throught to do baptisms for the dead and later I had my Endowment here. I hope to be sealed in this temple when it's time."
    },
    {
        templeName: "Draper Utah",
        location: "Draper, Utah, United States",
        dedicated: "20 March, 2009",
        area: 58300,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/draper-utah/400x250/draper-temple-759310-wallpaper.jpg",
        description: "The Draper Temple is one of the 5 temples in the Salt Lake Valley, I love how the baptism font is shaped and much larger than I originally thought it would be considering the temples size."
    },
    {
        templeName: "Salt Lake City",
        location: "Salt lake City, Utah, United States",
        dedicated: "1983, april, 6",
        area: 250000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg",
        description: "The Salt Lake temple holds dear with my family, for many generations we have had our marriages done in this temple with the most recent one being my parents 24 years ago."
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        description: "This temple is very unique becuase of its size. This temple is much larger than the Salt Lake Temple, it's one of the few temples that are this large in size in the world. This temple also was where one of my great-grandfathers had his sealing to his wife."
    },
    {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona, United States",
        dedicated: "23 October, 1927",
        area: 75000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_main.jpeg",
        description: "The Mesa Temples structure reminds of how the temple would look like duriing Jesus' ministering. That's what makes this one of my favorites."
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah, United States",
        dedicated: "8 April, 1877",
        area: 143969,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-894724-wallpaper.jpg",
        description: "This temple was recently reconstructed and it is beautiful. During the time when Brigham Young was the prophet, this was one of the places where the leaders of the church would meet and find inspiration from God."
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "7 June, 2015",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg",
        description: "During my mission my cousin go married in this temple. Seeing the beauty indie was remarkable, the sealing rook that day was shining with the rising sun and the glass stain windows were very beautiful that day."
    },
    {
        templeName: "Jordan River Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "20 November, 1981",
        area: 148236,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/jordan-river-temple-lds-941302-wallpaper.jpg",
        description: "I love this temple because of how much I've been going there recently. My friends and I try to go as often together so that we can share our experiences anc also catch up on what we've been doing."
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "21 May, 1888",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-766504-wallpaper.jpg",
        description: "The Manti Temple was one of the first (if not first) temples to be built in Utah. It was reconstructed for the purpose of sustaining its life much more for future generation to come."
    },
    {
        templeName: "Phoenix Arizona",
        location: "Phoenix, Arizona, United States",
        dedicated: "16 November, 2014",
        area: 64870,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/pheonix-arizona/400x250/phoenix-arizona-temple-daytime-1464454-wallpaper.jpg",
        description: "This temple reminds me about the Draper Utah Temple, the size may be different but its spire resembles with the other Utah temples, I can consider this temple a home away from home."
    },
    {
        templeName: "Reno Nevada",
        location: "Reno, Nevada, United States",
        dedicated: "23 April, 2000",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/reno-nevada/400x250/reno-nevada-lds-temple-1079431-wallpaper.jpg",
        description: "Currently this is one of the two temples that exist in Nevada, however will have four temples in nevada once construction starts for the other two."
    }

];

function displayTemples(filter = 'all') {
    const templeList = document.getElementById('temple-list');
    templeList.innerHTML = '';

    const filteredtemples = temples.filter(temple => {
        if (filter === 'old') return new Date(temple.dedicated).getFullYear() < 1999;
        if (filter === 'new') return new Date(temple.dedicated).getFullYear() > 2000;
        if (filter === 'large') return temple.area > 90000;
        if (filter === 'small') return temple.area < 90000;
        if (filter === 'utah') return temple.location.includes("Utah");
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
            <p><strong>Description:</strong> ${temple.description}</p>
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