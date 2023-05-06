import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globalStyle.css';
import { UserQueryProvider } from './contexts/userQueryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<UserQueryProvider>
			<App />
		</UserQueryProvider>
	</React.StrictMode>,
);
