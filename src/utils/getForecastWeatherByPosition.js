/* eslint-disable camelcase */
export default function getForecastWeatherByPosition(arrayList, position) {
	return position.map((pos) => {
		const {
			dt_txt,
			main: { temp_max, temp_min },
			weather: [{ description, icon }],
			wind: { speed },
		} = arrayList[pos];

		return {
			dt_txt,
			temp_max,
			temp_min,
			description,
			icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
			speed,
		};
	});
}
