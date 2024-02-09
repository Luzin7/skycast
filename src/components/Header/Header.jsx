import React from 'react';
import fetchUserGeolocationAndWeatherData from '../../scripts/getUserGeolocation';
import ThemeToggleButton from '../ThemeToggleButton';
import CurrentLocationWeatherInfo from './components/CurrentLocationWeatherInfo';
import useUserStore from '../../store/user';
import SearchInput from './components/SearchInput';

export default function Header() {
	const { state: userState } = useUserStore();

	fetchUserGeolocationAndWeatherData();
	return (
		<header className="flex items-center w-full h-[10vh] bg-black/25">
			<div className="flex flex-row flex-wrap justify-evenly items-center w-full">
				<h1 className="hidden md:block md:text-2xl md:font-bold md:cursor-default md:text-themeTextLight-highEmphasis2 xl:text-3xl">
					SkyCast
				</h1>
				<SearchInput />
				{userState.userGeolocation && (
					<div className="hidden md:flex md:items-center md:flex-row md:flex-wrap">
						<CurrentLocationWeatherInfo
							userGeolocationInfo={userState.userGeolocation}
						/>
					</div>
				)}
				<ThemeToggleButton />
			</div>
		</header>
	);
}
