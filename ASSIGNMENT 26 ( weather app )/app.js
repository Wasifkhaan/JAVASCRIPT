const apiKey = '97a08c2c3e98c1c915ae0df770538d57';

document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('city-input');
    const searchButton = document.getElementById('search-btn');
    const weatherCard = document.querySelector('.weather-card');
    const forecastContainer = document.querySelector('.forecast-container');

    // Function to fetch weather data
    function fetchWeather(location) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    const { name, sys, main, weather } = data;
                    const date = new Date().toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                    weatherCard.innerHTML = `
                        <h2>${name}, ${sys.country}</h2>
                        <p>${date}</p>
                        <h1>${Math.round(main.temp)}&deg;C</h1>
                        <p>${weather[0].description}</p>
                        <p>Humidity: ${main.humidity}%</p>
                    `;
                    fetchForecast(data.coord.lat, data.coord.lon);
                } else {
                    weatherCard.innerHTML = '<p>City not found. Please try again.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherCard.innerHTML = '<p>Unable to fetch weather data. Please check your internet connection.</p>';
            });
    }

    // Function to fetch 7-day forecast data
    function fetchForecast(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const { daily } = data;
                forecastContainer.innerHTML = daily.slice(1, 8).map(day => {
                    const date = new Date(day.dt * 1000).toLocaleDateString(undefined, {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                    });
                    return `
                        <div class="forecast-item">
                            <p>${date}</p>
                            <p>${Math.round(day.temp.day)}&deg;C</p>
                            <p>${day.weather[0].description}</p>
                        </div>
                    `;
                }).join('');
            })
            .catch(error => {
                console.error('Error fetching forecast data:', error);
                forecastContainer.innerHTML = '<p>Unable to fetch forecast data.</p>';
            });
    }

    // Event listener for the search button
    searchButton.addEventListener('click', () => {
        const city = searchBox.value.trim();
        if (city) {
            fetchWeather(city);
        } else {
            weatherCard.innerHTML = '<p>Please enter a city name.</p>';
        }
    });

    // Default weather for New York
    fetchWeather('Karachi');
});

