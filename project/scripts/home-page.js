function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
}

function displayLasModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
}


displayCurrentYear();
displayLasModifiedDate();