import React, { useEffect } from 'react';
import getUserGeolocation from '../scripts/getUserGeolocation';

export default function Header() {
	useEffect(() => {
		getUserGeolocation();
	}, []);

	return <div>Header</div>;
}
