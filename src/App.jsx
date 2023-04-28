import React from 'react';
import Header from './components/Header/Header';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import HourlyForecastWeather from './components/HourlyForecastWeather/HourlyForecastWeather';
import NextDayForecastWeather from './components/NextDayForecastWeather/NextDayForecastWeather';
import { UserGeolocationProvider } from './contexts/userGeolocationContext';
import { UserQueryProvider } from './contexts/userQueryContext';

function App() {
	return (
		<>
			<UserQueryProvider>
				<UserGeolocationProvider>
					<Header />
				</UserGeolocationProvider>
				<main>
					<WeatherInfo />
					<section className="forecasts">
						<h1>Previsões para [CIDADE]</h1>
						<HourlyForecastWeather />
						<NextDayForecastWeather />
					</section>
				</main>
			</UserQueryProvider>
		</>
	);
}

export default App;
