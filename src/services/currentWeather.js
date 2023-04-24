import axios from 'axios';
import API_KEY from '../../env';

const getCurrentWeatherByGeolocation = (lat, lon) => {
	try {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
			)
			.then((res) => {
				const { name } = res.data;
				const { temp } = res.data.main;
				const { icon } = res.data.weather[0];

				localStorage.setItem(
					'CACHE_USER_GEO_INFO',
					JSON.stringify({ name, temp, icon }),
				);
			});
	} catch (error) {
		console.log(error.message);
	}
};

const getCurrentWeatherByQuery = (city) => {
	try {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`,
			)
			.then((res) => console.log(res.data));
	} catch (error) {
		console.log(error.message);
	}
};

export { getCurrentWeatherByQuery, getCurrentWeatherByGeolocation };
