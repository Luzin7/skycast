import { getCurrentWeatherByQuery } from '../services/currentWeather';

export default async function setCurrentWeatherData(searchInput, userActions) {
	const currentWeatherData = await getCurrentWeatherByQuery(searchInput);
	const { weather, main, wind, sys, name, cod } = currentWeatherData;

	if (cod === 200) {
		userActions.updateUserQuery({
			name,
			country: sys.country,
			description: weather[0].description,
			icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
			temp: main.temp,
			feels_like: main.feels_like,
			humidity: main.humidity,
			visibility: main.visibility,
			speed: wind.speed,
			cod,
		});
	}
}
