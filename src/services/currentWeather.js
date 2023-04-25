import axios from 'axios';
import API_KEY from '../../env';

const getCurrentWeatherByGeolocation = (lat, lon) => {
	const fetchData = axios
		.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
		)
		.then((res) => res.data);

	return fetchData;
};

const getCurrentWeatherByQuery = (city) => {
	try {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`,
			)
			.then((res) => res.data);
	} catch (error) {
		throw new Error(`Error : ${error.message}`);
	}
};

export { getCurrentWeatherByQuery, getCurrentWeatherByGeolocation };
