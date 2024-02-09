import getForecastWeather from '../services/forecastWeather';
import getForecastWeatherByPosition from '../utils/getForecastWeatherByPosition';

export default async function setForecastWeatherData(
	searchInput,
	weatherActions,
) {
	const forecastWeatherData = await getForecastWeather(searchInput);
	const { city, list } = forecastWeatherData;
	const hourlyForecast = getForecastWeatherByPosition(list, [0]);
	const forecastForTomorrow = getForecastWeatherByPosition(list, [7]);

	weatherActions.updateForecastWeather({
		hourlyForecast: {
			name: city.name,
			...hourlyForecast[0],
		},
		nextDayForecast: {
			name: city.name,
			...forecastForTomorrow[0],
		},
	});
}
