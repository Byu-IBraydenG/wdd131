function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
}

function displayLasModifiedDate() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
}

function calculateWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}
 let temp = 5;
 let windSpeed = 10;

 if (temp <= 10 && windSpeed > 4.8) {
    let windChill = calculateWindChill(temp, windSpeed);
 }

displayCurrentYear();
displayLasModifiedDate();