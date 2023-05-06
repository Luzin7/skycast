import React, { useContext } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import Header from './components/Header/Header';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import HourlyForecastWeather from './components/HourlyForecastWeather/HourlyForecastWeather';
import NextDayForecastWeather from './components/NextDayForecastWeather/NextDayForecastWeather';
import Footer from './components/Footer/Footer';
import { UserGeolocationProvider } from './contexts/userGeolocationContext';
import { UserQueryContext } from './contexts/userQueryContext';

function App() {
	const { userQuery, forecastWeather } = useContext(UserQueryContext);
	return (
		<>
			<UserGeolocationProvider>
				<Header />
			</UserGeolocationProvider>
			<main>
				{userQuery ? (
					<div className="main_container">
						<WeatherInfo />
						{forecastWeather ? (
							<section className="forecasts">
								<div className="section_container">
									<HourlyForecastWeather />
									<NextDayForecastWeather />
								</div>
							</section>
						) : (
							<section className="forecasts">
								<div className="section_container">
									<AiOutlineLoading className="loading" />
								</div>
							</section>
						)}
					</div>
				) : (
					<div className="main_container">
						<div className="start_result"></div>
					</div>
				)}
			</main>
			<Footer />
		</>
	);
}

export default App;
