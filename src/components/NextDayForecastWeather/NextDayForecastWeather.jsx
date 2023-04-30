/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { UserQueryContext } from '../../contexts/userQueryContext';

export default function NextDayForecastWeather() {
	const { forecastWeather } = useContext(UserQueryContext);

	const showCurrentWeatherInfo = () => {
		if (!forecastWeather) return null;

		if (forecastWeather) {
			const { name, temp_max, temp_min, description, icon } =
				forecastWeather.nextDayForecast;
			return (
				<div className="weather_info_bo">
					<h2 className="current_weather_city">Daqui a 24 horas em {name}</h2>
					<div className="current_city_weather">
						<span className="current_weather_temperature">
							{`Temperatuma máxima: ${temp_max.toFixed(0)}°C`}
							<br />
							{`Temperatuma mínima: ${temp_min.toFixed(0)}°C`}
						</span>
					</div>
					<div className="current_weather_conditions">
						<div className="current_weather_condition">
							<img src={icon} alt={`Temperatura atual em ${name}`} />
							<p className="current_weather_condition_desc">{description}</p>
						</div>
					</div>
				</div>
			);
		}

		return null;
	};

	return (
		<section className="nextday_forecast">
			<div>{showCurrentWeatherInfo()}</div>
		</section>
	);
}
