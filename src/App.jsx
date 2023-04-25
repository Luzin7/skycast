import React from 'react';
import Header from './components/Header';
import { UserGeolocationProvider } from './contexts/userGeolocationContext';

function App() {
	return (
		<>
			<UserGeolocationProvider>
				<Header />
			</UserGeolocationProvider>
		</>
	);
}

export default App;
