/* eslint-disable camelcase */
import React, { useContext, useState, useRef, useEffect } from 'react';
import fetchUserGeolocationAndWeatherData from '../../scripts/getUserGeolocation';
import { UserGeolocationContext } from '../../contexts/userGeolocationContext';
import { getCurrentWeatherByQuery } from '../../services/currentWeather';
import { UserQueryContext } from '../../contexts/userQueryContext';
// import getCurrentYear from '../scripts/getDate';

export default function Header() {
	const { userGeolocationInfo } = useContext(UserGeolocationContext);
	const { setUserQuery } = useContext(UserQueryContext);
	const [searchInput, setSearchInput] = useState('');
	const delayToFetch = useRef(null);

	const handleSearchInput = (value) => {
		setSearchInput(value);
	};

	useEffect(() => {
		if (searchInput) {
			if (delayToFetch.current) clearInterval(delayToFetch.current);

			delayToFetch.current = setTimeout(() => {
				getCurrentWeatherByQuery(searchInput).then(
					({
						weather: [{ description, icon }],
						main: { temp, feels_like, temp_min, temp_max, humidity },
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
							temp_max,
							temp_min,
							feels_like,
							humidity,
							visibility,
							speed,
						});
					},
				);
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
					<span>{`${name}, ${country} / ${temp.toFixed(0)}°C`}</span>
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
		<header>
			<h1>SkyCast</h1>
			<input
				type="text"
				placeholder="Busce por uma cidade..."
				value={searchInput}
				onChange={({ target }) => handleSearchInput(target.value)}
			/>
			<div className="current_location_info">
				{showCurrentLocationWeatherInfo()}
			</div>
			{/* <div className="about">
				<span>
					&copy; {getCurrentYear()} -{' '}
					<a
						href="https://lvictor-portfolio.vercel.app/"
						target="_blank"
						rel="noreferrer"
					>
						Luan Victor
					</a>
				</span>
			</div> */}
		</header>
	);
}
