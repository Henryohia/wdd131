const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;


// weather 


// Static weather values
const temperature = 8;
const windSpeed = 10;

// Function to calculate wind chill (Metric Formula)
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// Select wind chill span
const windChill = document.querySelector("#windchill");

// Check conditions before calculating
if (temperature <= 10 && windSpeed > 4.8) {

    windChill.textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;

} else {

    windChill.textContent = "N/A";

}