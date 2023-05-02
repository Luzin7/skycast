/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { BsArrowDownShort, BsArrowUpShort, BsWind } from 'react-icons/bs';
import { UserQueryContext } from '../../contexts/userQueryContext';
import './hourlyForecastWeather.css';

export default function HourlyForecastWeather() {
	const { forecastWeather } = useContext(UserQueryContext);

	const showCurrentWeatherInfo = () => {
		if (!forecastWeather) return null;

		if (forecastWeather) {
			const { name, dt_txt, temp_max, temp_min, description, icon, speed } =
				forecastWeather.hourlyForecast;

			const hourlyForecast = dt_txt.substr(11, 5);

			return (
				<div className="hourly_weather_info_box">
					<h2 className="current_weather_city">Previsões para {name} em 3h</h2>
					<h3 className="forecast_weather">Às {hourlyForecast}h</h3>
					<div className="current_city_forecast_weather">
						<span className="forecast_weather_temperature">
							<BsArrowUpShort className="icon_warm" />
							{`Temperatuma máxima: ${temp_max.toFixed(0)}°C`}
						</span>
						<span className="forecast_weather_temperature">
							<BsArrowDownShort className="icon_cold" />
							{`Temperatuma mínima: ${temp_min.toFixed(0)}°C`}
						</span>
					</div>
					<div className="forecast_weather_conditions">
						<div className="forecast_weather_condition">
							<img src={icon} alt={`Temperatura atual em ${name}`} />
							<p className="current_weather_condition_desc">{description}</p>
						</div>
						<span>
							{`${speed.toFixed(1)} km/h`} <BsWind />
						</span>
					</div>
				</div>
			);
		}

		return null;
	};
	return (
		<section className="hourly_forecast">
			<div>{showCurrentWeatherInfo()}</div>
		</section>
	);
}
