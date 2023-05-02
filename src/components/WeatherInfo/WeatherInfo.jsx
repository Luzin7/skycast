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
import './weatherInfo.css';

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
				feels_like,
				humidity,
				visibility,
				speed,
			} = userQuery;
			const foo = document.querySelector('body');

			const warm = 'warm';
			const cold = 'cold';
			if (temp > 22) {
				foo.classList.add(warm);
			} else {
				foo.classList.remove(warm);
			}
			if (temp < 0) {
				foo.classList.add(cold);
			} else {
				foo.classList.remove(cold);
			}

			const dropIcon = () => {
				if (humidity >= 70) {
					return <BsDropletFill />;
				}
				if (humidity >= 30 && humidity < 70) {
					return <BsDropletHalf />;
				}
				if (humidity < 30) {
					return <BsDroplet />;
				}

				return null;
			};

			const timeIcon = () => {
				const time = icon.substr(36, 1);

				if (time.includes('d')) {
					return <BsCloudSunFill className="sun_icon" />;
				}
				if (time.includes('n')) {
					return <BsFillCloudMoonFill className="sun_icon" />;
				}

				return null;
			};

			const thermometerIcon = () => {
				if (feels_like > temp) {
					return <BsThermometerHalf className="sensation_icon" />;
				}
				if (feels_like < temp) {
					return <BsThermometerLow className="sensation_icon" />;
				}

				return null;
			};

			return (
				<div className="weather_info_box">
					<h2 className="current_weather_city">
						Tempo agora em <br />
						<span>{`${name}, ${country}`}</span>
					</h2>
					<div className="current_city_weather">
						<span className="current_weather_icon">
							{/* USAR ÍCONE DE ACORDO COM O HORÁRIO */}
							{timeIcon()}
						</span>
						<span className="current_weather_temperature">
							{`${temp.toFixed(0)}°C`}
						</span>
					</div>
					<div className="current_weather_conditions">
						<div className="current_weather_condition">
							<img
								className="condition_icon"
								src={icon}
								alt={`Temperatura atual em ${name}, ${country}`}
							/>
							<p className="current_weather_condition_desc">{description}</p>
						</div>
						<div className="current_weather_sensation">
							{/* ADICIONAR ÍCONE QUE VARIA DE ACORDO COM A SENSAÇÃO */}
							{thermometerIcon()}
							{/* <BsThermometerLow /> */}
							<p className="current_weather_condition_desc">{`Sensação ${feels_like.toFixed(
								0,
							)}°C`}</p>
						</div>
					</div>
					<ul className="current_weather_extras">
						<li>
							<span className="li_title">Vento:</span>
							<span className="li_content">
								{`${speed.toFixed(1)} km/h`} <BsWind />
							</span>
						</li>
						<li>
							{/* ADD ÍCONE QUE REMETA A HUMIDADE */}
							<span className="li_title">Humidade:</span>
							<span className="li_content">
								{`${humidity}%`}
								{dropIcon()}
							</span>
						</li>
						<li>
							<span className="li_title">Visibilidade:</span>
							<span className="li_content">
								{`${visibility / 1000}km`}
								<BsEye />
							</span>
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
