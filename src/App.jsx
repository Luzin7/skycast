import React, { useState } from 'react';
import { getCurrentWeatherByQuery } from './services/currentWeather';
import Header from './components/Header';

function App() {
	const [s, setS] = useState('');
	return (
		<>
			<Header />
			<input
				type="text"
				value={s}
				onChange={({ target }) => setS(target.value)}
			/>
			<button type="button" onClick={() => getCurrentWeatherByQuery(s)}>
				Chama
			</button>
		</>
	);
}

export default App;
