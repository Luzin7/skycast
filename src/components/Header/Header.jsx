/* eslint-disable camelcase */
import React, { useContext, useState, useRef, useEffect } from 'react';
import fetchUserGeolocationAndWeatherData from '../../scripts/getUserGeolocation';
import { UserGeolocationContext } from '../../contexts/userGeolocationContext';
import { getCurrentWeatherByQuery } from '../../services/currentWeather';
import getForecastWeather from '../../services/forecastWeather';
import { UserQueryContext } from '../../contexts/userQueryContext';
import './header.css';

export default function Header() {
	const { userGeolocationInfo } = useContext(UserGeolocationContext);
	const { setUserQuery, setForecastWeather } = useContext(UserQueryContext);
	const [searchInput, setSearchInput] = useState('');
	const delayToFetch = useRef(null);

	const handleSearchInput = (value) => {
		setSearchInput(value);
	};

	const getForecastWeatherByPosition = (listArr, position) => {
		return position.map((pos) => {
			const {
				dt_txt,
				main: { temp_max, temp_min },
				weather: [{ description, icon }],
				wind: { speed },
			} = listArr[pos];

			return {
				dt_txt,
				temp_max,
				temp_min,
				description,
				icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
				speed,
			};
		});
	};

	useEffect(() => {
		if (searchInput) {
			if (delayToFetch.current) clearInterval(delayToFetch.current);

			delayToFetch.current = setTimeout(() => {
				getCurrentWeatherByQuery(searchInput).then(
					({
						weather: [{ description, icon }],
						main: { temp, feels_like, humidity },
						visibility,
						wind: { speed },
						sys: { country },
						name,
					}) => {
						setUserQuery({
							name,
							country,
							description,
							icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
							temp,
							feels_like,
							humidity,
							visibility,
							speed,
						});
					},
				);
				getForecastWeather(searchInput).then(({ city: { name }, list }) => {
					const hourlyForecast = getForecastWeatherByPosition(list, [0]);
					const forecastForTomorrow = getForecastWeatherByPosition(list, [7]);

					setForecastWeather({
						hourlyForecast: {
							name,
							...hourlyForecast[0],
						},
						nextDayForecast: {
							name,
							...forecastForTomorrow[0],
						},
					});
				});
			}, 1000);

			return () => clearInterval(delayToFetch.current);
		}

		return setSearchInput('');
	}, [searchInput]);

	const showCurrentLocationWeatherInfo = () => {
		if (userGeolocationInfo) {
			const { name, country, temp, icon } = userGeolocationInfo;
			return (
				<>
					<img src={icon} alt="icon" />
					<span className={`${name}_info`}>
						{`${name}, ${country} / ${temp.toFixed(0)}°C`}
					</span>
				</>
			);
		}

		return (
			<>
				<span>Não temos informações sobre sua localização.</span>
			</>
		);
	};

	fetchUserGeolocationAndWeatherData();
	return (
		<header className="header">
			<div className="header_content">
				<h1 className="header_title">SkyCast</h1>
				<input
					className="input_search"
					type="text"
					placeholder="Busce por uma cidade..."
					value={searchInput}
					onChange={({ target }) => handleSearchInput(target.value)}
				/>
				<div className="current_location_info">
					{showCurrentLocationWeatherInfo()}
				</div>
			</div>
		</header>
	);
}
