const short = document.querySelector("#short");
const year = document.querySelector("#year")

const today = new Date();

const time = new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
}).format(today);

short.innerHTML = `Last Modification: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "short"
    }
).format(today)}  ${time}</,span>`;

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temp, speedKmh) {
    return (
        13.12 + 
        0.6215 * temp -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * temp * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
}

window.addEventListener("DOMContentLoaded", () => {
    const tempDisplay = document.getElementById("temperatureC");
    const speedDisplay = document.getElementById("windSpeedKM");

    tempDisplay.textContent = `${temperature} °C`
    speedDisplay.textContent = `${windSpeed} °C`
})

window.addEventListener("DOMContentLoaded", () => {
    const windChillElement = document.getElementById("windChill");

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °C`;
    } 
    else {
        windChillElement.textContent = "N/A";
    }
});