let weather = {
    "apikey": "61ee1404894bb348b83a1980a203f33e",
    fetchWeather: function(city) {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric&appid=" +
                this.apikey

            ).then((response) => response.json())
            .then((data) => this.displayweather(data));
    },
    displayweather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed:" + speed + "kmph";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
// search button
document.querySelector(".search button").addEventListener("click", function() {
    weather.fetchWeather(document.querySelector(".search-bar").value);
});
// enter button
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.fetchWeather(document.querySelector(".search-bar").value);
    }
});
weather.fetchWeather("Hyderabad");