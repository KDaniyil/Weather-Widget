const btn = document.querySelector(".btn");
const city = document.querySelector("input");
btn.addEventListener("click", getWeather);

function getWeather() {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showWeather(data);
    });
}

function showWeather(data) {
  document.querySelector(".weather-location").textContent =
    data.name + " " + data.sys.country;
  let icon = data.weather[0].icon;
  document
    .querySelector("img")
    .setAttribute("src", `https://openweathermap.org/img/w/${icon}.png`);
  let temp = Math.round(data.main.temp);
  document.querySelector(".weather-temp").textContent = `${temp} °C`;
  document.querySelector(".weather-desc").textContent = data.weather[0].main;
  document.querySelector(
    ".weather-pressure"
  ).textContent = `Pressure: ${data.main.pressure}`;
  document.querySelector(
    ".weather-humidity"
  ).textContent = `Humidity: ${data.main.humidity} %`;
  document.querySelector(
    ".wind-speed"
  ).textContent = ` Wind : ${data.wind.speed} m/s ${data.wind.deg} deg`;
}
