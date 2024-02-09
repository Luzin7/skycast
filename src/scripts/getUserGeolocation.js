import { useState } from 'react';
import { getCurrentWeatherByGeolocation } from '../services/currentWeather';
import useUserStore from '../store/user';

const GEOLOCATION_OPTIONS = {
	enableHighAccuracy: true,
	timeout: 10000,
	maximumAge: 0,
};

export default function fetchUserGeolocationAndWeatherData({
	onFetchError,
	geolocationOptions = GEOLOCATION_OPTIONS,
	geolocationCacheKey = 'GEOLOCATION_CACHE_KEY',
	lastFetchCacheKey = 'LAST_FETCH_CACHE_KEY',
	fetchInterval = 1800000,
} = {}) {
	const { actions } = useUserStore();
	const cachedData = JSON.parse(localStorage.getItem(geolocationCacheKey));
	const [isFetching, setIsFetching] = useState(false);

	const fetchGeolocationAndWeatherData = () => {
		setIsFetching(true);
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				const { latitude: lat, longitude: lon } = coords;

				getCurrentWeatherByGeolocation(lat, lon)
					.then(
						({
							name,
							main: { temp },
							sys: { country },
							weather: [{ icon }],
						}) => {
							actions.updateUserGeolocation({
								name,
								temp,
								country,
								icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
							});
							localStorage.setItem(
								geolocationCacheKey,
								JSON.stringify({
									name,
									temp,
									country,
									icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
								}),
							);
							setIsFetching(false);
						},
					)
					.catch((err) => {
						onFetchError?.(err);
						setIsFetching(false);
					});
			},
			(err) => {
				onFetchError?.(err);
				setIsFetching(false);
			},
			geolocationOptions,
		);
	};

	const lastFetchTime = parseInt(localStorage.getItem(lastFetchCacheKey), 10);
	const currentTime = new Date().getTime();

	if (!cachedData || currentTime - lastFetchTime > fetchInterval) {
		if (isFetching) return;
		fetchGeolocationAndWeatherData();
		localStorage.setItem(lastFetchCacheKey, currentTime);
	}
}
