const apiKey = "989e51a7d15ce7dcd667227e0a598353";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const city_name = document.querySelector(".city-name");
const day_time = document.querySelector(".date");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const temp_range = document.querySelector(".temp-range");

// Since we'll be searching for city, city will be passed as a parameter
async function fetchWeather(city) {
  try {
    // the function will wait for the fetch() to successfully grabs all the necessary info
    // the fetch() will either return a Response or throw an error
    const response = await fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}` );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    // then we'll wait for the response to be in JSON format
    const data = await response.json();

    date = new Date();

    // Displaying the weather condition
    city_name.textContent = data.name + ",  " + data.sys.country;
    day_time.textContent = date;
    temperature.textContent = data.main.temp + "°C";
    description.textContent = data.weather[0].main;
    temp_range.textContent = data.main.temp_min + "°C" + " / " + data.main.temp_max + "°C";

    console.log("City, Country: ", data.name, data.sys.country);
    console.log("Date: ", date);
    console.log("Weather: ", data.weather[0].main);
    console.log("Temperature: ", data.main.temp + "°C");
    console.log("Temperature Range: ", data.main.temp_min + "°C" + " / " + data.main.temp_max + "°C");
  } 
  catch (error) {
    console.log(`Error fetching weather: ${error}`);
  }
}
//  when search button is clicked
searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city === "") {
    alert("Input a city first!!");
  } else {
    fetchWeather(city);
  }
});
