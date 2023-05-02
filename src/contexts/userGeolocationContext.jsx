import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserGeolocationContext = createContext();

export const UserGeolocationProvider = ({ children }) => {
	const cachedData = JSON.parse(localStorage.getItem('GEOLOCATION_CACHE_KEY'));
	const [userGeolocationInfo, setUserGeolocationInfo] = useState(
		cachedData || null,
	);

	return (
		<UserGeolocationContext.Provider
			value={{
				userGeolocationInfo,
				setUserGeolocationInfo,
			}}
		>
			{children}
		</UserGeolocationContext.Provider>
	);
};

UserGeolocationProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
