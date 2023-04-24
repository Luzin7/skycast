import { getCurrentWeatherByGeolocation } from '../services/currentWeather';

export default function getUserGeolocation() {
	const lastFetch = localStorage.getItem('lastFetch');
	const currentTime = new Date().getTime();

	function getCurrentUserPosition(position) {
		const userCurrentLat = position.coords.latitude;
		const userCurrentLon = position.coords.longitude;
		getCurrentWeatherByGeolocation(userCurrentLat, userCurrentLon);
	}
	if (!lastFetch || currentTime - lastFetch > 1800000) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(getCurrentUserPosition);
		}
		localStorage.setItem('lastFetch', currentTime);
	}
}
