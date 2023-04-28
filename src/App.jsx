import React from 'react';
import Header from './components/Header/Header';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import { UserGeolocationProvider } from './contexts/userGeolocationContext';
import { UserQueryProvider } from './contexts/userQueryContext';

function App() {
	return (
		<>
			<UserQueryProvider>
				<UserGeolocationProvider>
					<Header />
				</UserGeolocationProvider>
				<WeatherInfo />
			</UserQueryProvider>
		</>
	);
}

export default App;
