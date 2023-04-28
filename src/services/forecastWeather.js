import axios from 'axios';
import API_KEY from '../../env';

const getForecastWeather = (city) => {
	const fetchForecastData = axios
		.get(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`,
		)
		.then((res) => res.data);

	return fetchForecastData;
};

export default getForecastWeather;
