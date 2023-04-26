import React from 'react';
import Header from './components/Header/Header';
import { UserGeolocationProvider } from './contexts/userGeolocationContext';
import { UserQueryProvider } from './contexts/userQueryContext';

function App() {
	return (
		<>
			<UserGeolocationProvider>
				<UserQueryProvider>
					<Header />
				</UserQueryProvider>
			</UserGeolocationProvider>
		</>
	);
}

export default App;
