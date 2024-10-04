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

// Function to calculate Wind Chill based on temperature and wind speed
function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) {
        const windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2); // Return the result rounded to 2 decimal places
    } else {
        return "N/A"; // Conditions not met for wind chill calculation
    }
}

// Static values for temperature and wind speed (will be dynamic in future lessons)
const temperature = 45; // Example temperature in Fahrenheit
const windSpeed = 10; // Example wind speed in mph

// Calculate and display the windchill factor when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const windChillFactor = calculateWindChill(temperature, windSpeed);
    
    // Corrected: Use backticks for the template literal
    document.getElementById("windChill").textContent = `Wind Chill: ${windChillFactor} °F`;
});
