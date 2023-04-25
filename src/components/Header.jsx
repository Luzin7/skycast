import React, { useContext } from 'react';
import fetchUserGeolocationAndWeatherData from '../scripts/getUserGeolocation';
import { UserGeolocationContext } from '../contexts/userGeolocationContext';
import getCurrentYear from '../scripts/getDate';

export default function Header() {
	const { userGeolocationInfo } = useContext(UserGeolocationContext);
	const { name, country, temp, icon } = userGeolocationInfo;

	fetchUserGeolocationAndWeatherData();
	return (
		<header>
			<nav>
				<h1>SkyCast</h1>
				<input type="text" placeholder="Busce por uma cidade..." />
				<div className="current_location_info">
					<img src={icon} alt="icon" />
					{/* TO DO
					ARRENDONDAR O VALOR DA TEMPERATURA DIRETO NO RESULTADO */}
					<span>{`${name}, ${country} / ${temp.toFixed(0)}°C`}</span>
				</div>
			</nav>
			<div className="about">
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
			</div>
		</header>
	);
}
