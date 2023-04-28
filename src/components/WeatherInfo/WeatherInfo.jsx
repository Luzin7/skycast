/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
import React, { useContext } from 'react';
import {
	BsCloudSunFill,
	BsFillCloudMoonFill,
	BsThermometerLow,
	BsThermometerHalf,
	BsWind,
	BsDroplet,
	BsDropletHalf,
	BsDropletFill,
	BsEye,
} from 'react-icons/bs';
import { UserQueryContext } from '../../contexts/userQueryContext';

export default function WeatherInfo() {
	const { userQuery } = useContext(UserQueryContext);

	const showCurrentWeatherInfo = () => {
		if (!userQuery) return null;

		if (userQuery) {
			const {
				name,
				country,
				description,
				icon,
				temp,
				temp_max,
				temp_min,
				feels_like,
				humidity,
				visibility,
				speed,
			} = userQuery;
			return (
				<div className="weather_info_box">
					<h2 className="current_weather_city">
						Tempo agora em <br />
						<span>{`${name}, ${country}`}</span>
					</h2>
					<div className="current_city_weather">
						<span className="current_weather_icon">
							{/* USAR ÍCONE DE ACORDO COM O HORÁRIO */}
							<BsCloudSunFill />
							<BsFillCloudMoonFill />
						</span>
						<span className="current_weather_temperature">
							{`${temp.toFixed(0)}°C`}
						</span>
					</div>
					<div className="current_weather_conditions">
						<div className="current_weather_condition">
							<img
								src={icon}
								alt={`Temperatura atual em ${name}, ${country}`}
							/>
							<p className="current_weather_condition_desc">{description}</p>
						</div>
						<div className="current_weather_sensation">
							{/* ADICIONAR ÍCONE QUE VARIA DE ACORDO COM A SENSAÇÃO */}
							<BsThermometerHalf />
							<BsThermometerLow />
							<p className="current_weather_condition_desc">{`Sensação ${feels_like.toFixed(
								0,
							)}°C`}</p>
						</div>
					</div>
					<ul className="current_weather_extras">
						<li>
							<BsWind />
							<span>{`${speed.toFixed(1)}m/s`}</span>
						</li>
						<li>
							{/* ADD ÍCONE QUE REMETA A HUMIDADE */}
							<BsDroplet />
							<BsDropletHalf />
							<BsDropletFill />
							<span>{`Humidade: ${humidity}%`}</span>
						</li>
						<li>
							<BsEye />
							{`Visibilidade: ${visibility / 1000}km`}
						</li>
					</ul>
				</div>
			);
		}

		return null;
	};

	return (
		<section className="weather_info">
			<div className="container">{showCurrentWeatherInfo()}</div>
		</section>
	);
}
