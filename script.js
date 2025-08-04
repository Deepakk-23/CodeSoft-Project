const apiKey = "6698dbfb721ff9d1337cb49bfe39a694";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();

    document.getElementById("cityName").innerText = `${data.name}, India`;
    document.getElementById("weatherDesc").innerText =
      data.weather[0].description;
    document.getElementById("temperature").innerText = `${data.main.temp}°C`;
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("wind").innerText = data.wind.speed;
    document.getElementById("pressure").innerText = data.main.pressure;

    document.getElementById("weatherCard").style.display = "block";
  } catch (error) {
    alert("Unable to fetch weather. Try a valid Indian city.");
  }
}
