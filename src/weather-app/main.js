let weather = {
    apiKeyWeather: '58a880dc5ccb427460bc1a94f7726980',
    apiKeyUnsplash: 'ZJMtsbekwoqTunZIqL5hNXIl8UnpxukXRMtY89leUe4',
    fetchWeather: function (city) {
        const apiWeather = fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKeyWeather,
        ).then((response) => response.json());
        const apiUnsplash = fetch(
            'https://api.unsplash.com/search/photos/?query=' + city + '&client_id=' + this.apiKeyUnsplash,
        ).then((response) => response.json());
        Promise.all([apiWeather, apiUnsplash]).then((data) => {
            this.displayWeather(data);
        });
    },

    displayWeather: function (data) {
        const { name } = data[0];
        const { icon, description } = data[0].weather[0];
        const { temp, humidity } = data[0].main;
        const { speed } = data[0].wind;
        document.querySelector('.city').innerText = `Weather in ${name}`;
        document.querySelector('.temp').innerText = `${temp} °C`;
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = `humidity: ${humidity}%`;
        document.querySelector('.wind').innerText = `Wind speed: ${speed} km/h`;
        document.body.style.backgroundImage = `url(${data[1].results[Math.floor(Math.random(1) * 10)].urls.raw})`;
    },
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    },
};
weather.fetchWeather('vietnam');
const btnSearch = document.querySelector('.btn-search');
const searchBar = document.querySelector('.search-bar');
btnSearch.addEventListener('click', (e) => {
    weather.search();
});
searchBar.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        weather.search();
    }
});
