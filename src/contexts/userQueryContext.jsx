import React, { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';

export const UserQueryContext = createContext();

export const UserQueryProvider = ({ children }) => {
	const [userQuery, setUserQuery] = useState('');

	return (
		<UserQueryContext.Provider value={{ userQuery, setUserQuery }}>
			{children}
		</UserQueryContext.Provider>
	);
};

UserQueryProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
