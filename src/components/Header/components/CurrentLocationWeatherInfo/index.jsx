import React from 'react';
import PropTypes from 'prop-types';

const CurrentLocationWeatherInfo = ({ userGeolocationInfo }) => {
	const { name, country, temp, icon } = userGeolocationInfo;

	return (
		<>
			<img src={icon} alt="icon" className="w-auto h-16" />
			<span className="text-themeTextLight-highEmphasis2">{`${name}, ${country} / ${temp.toFixed(
				0,
			)}°C`}</span>
		</>
	);
};

CurrentLocationWeatherInfo.propTypes = {
	userGeolocationInfo: PropTypes.shape({
		name: PropTypes.string.isRequired,
		country: PropTypes.string.isRequired,
		temp: PropTypes.number.isRequired,
		icon: PropTypes.string.isRequired,
	}).isRequired,
};

export default CurrentLocationWeatherInfo;
