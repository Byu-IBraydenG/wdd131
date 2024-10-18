function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
}

function displayLasModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
}

displayCurrentYear()
displayLasModifiedDate()

let reviewCount = localStorage.getItem('reviewCount');

if (!reviewCount) {
    reviewCount = 0;
}

reviewCount++;

localStorage.setItem('reviewCount', reviewCount);

document.getElementById('review-count').textContent = `You have submitted ${reviewCount} reviews.`;