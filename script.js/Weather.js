const city = document.getElementById("city");
const currentWeather = document.getElementById("current-weather");
const temperature = document.getElementById('temperature');
const currentTemperature = document.getElementById('current-temperature');
const degrees = document.getElementById("degrees");
const rain = document.getElementById("rain");
const humidityAtt = document.getElementById("humidity");
const wind = document.getElementById("wind");
const hours = document.getElementById("hours");

const apiKey = "8d088c90af9a4c8283f161411231712";
const cityApi = "Granada";
const encodedCity = encodeURIComponent(cityApi);
const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodedCity}&aqi=no`;

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        const { location, current, forecast } = data;
        const { name, region, country } = location;
        const { humidity, precip_in, temp_c: renamedTemperature, wind_kph, condition: condition1 } = current;
        const { icon, text } = condition1;
        const { forecastday } = forecast;
        const [firstElement] = forecastday;
        const { hour } = firstElement;

        city.innerHTML = `${name}, ${region}, ${country}`;
        currentWeather.innerHTML = `${text}`;
        degrees.innerHTML = `${renamedTemperature} °C `;
        degrees.insertAdjacentHTML("afterbegin", `<img src="${icon}" alt=""></img>`);
        rain.innerHTML = `🌧️ ${precip_in}%`;
        humidityAtt.innerHTML = `💧🌡️ ${humidity}%`;
        wind.innerHTML = `🌬️ ${wind_kph} Km/h`;

        for (let i = 0; i < hour.length; i++) {
            const { temp_c: renamedTemperatureHour, condition: conditionHour, time: timeHour } = hour[i];
            const { icon: iconHour } = conditionHour;
            const formattedTime = timeHour.substr(11, 5);

            hours.innerHTML += `
                <div>${formattedTime}</div>
                <img src="${iconHour}" alt="${iconHour}">
                <div>Temperatura: ${renamedTemperatureHour} °C </div>
            `;
        }
    })
    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
