import React, { useState } from 'react';
import useUserStore from '../../../../store/user';
import useWeatherStore from '../../../../store/weather';
import handleFetchError from '../../../../utils/handleFetchError';
import setCurrentWeatherData from '../../../../functions/setCurrentWeatherData';
import setForecastWeatherData from '../../../../functions/setForecastWeatherData';

export default function SearchInput() {
	const [searchInput, setSearchInput] = useState('');
	const { actions: weatherActions } = useWeatherStore();
	const { actions: userActions } = useUserStore();

	const handleSearchInput = (value) => {
		setSearchInput(value);
	};

	const setData = async () => {
		try {
			await setCurrentWeatherData(searchInput, userActions);
			await setForecastWeatherData(searchInput, weatherActions);
		} catch (error) {
			handleFetchError(error);
		}
	};
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				setData();
			}}
		>
			<input
				className="search max-w-[60vw] md:min-w-[60vw] xl:min-w-[40vw] h-10 rounded-3xl border-none outline-none p-2 bg-bgInput"
				type="text"
				placeholder="Busque por uma cidade..."
				value={searchInput}
				onChange={({ target }) => handleSearchInput(target.value)}
			/>
		</form>
	);
}
