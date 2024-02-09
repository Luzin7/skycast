import { create } from 'zustand';

const useWeatherStore = create((set) => ({
	state: {
		forecastWeather: null,
	},
	actions: {
		updateForecastWeather: (forecastWeather) =>
			set(({ state }) => ({
				state: {
					...state,
					forecastWeather: {
						...state.forecastWeather,
						...forecastWeather,
					},
				},
			})),
	},
}));

export default useWeatherStore;
