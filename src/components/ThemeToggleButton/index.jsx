import React from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import useThemeStore from '../../store/ThemeStatus';

export default function ThemeToggleButton() {
	const { state, actions } = useThemeStore();

	const toggleTheme = () => {
		actions.toggleTheme();
		const body = document.querySelector('body');

		body.classList.toggle('dark-mode');
	};
	return (
		<>
			{state.isDarkModeActive ? (
				<MdLightMode
					className="hover:transform text-yellow-400 text-3xl cursor-pointer"
					onClick={() => toggleTheme()}
				/>
			) : (
				<MdDarkMode
					className="hover:transform text-themeTextLight-highEmphasis text-3xl cursor-pointer"
					onClick={() => toggleTheme()}
				/>
			)}
		</>
	);
}
