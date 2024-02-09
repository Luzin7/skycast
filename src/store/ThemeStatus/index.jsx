import { create } from 'zustand';

const useThemeStore = create((set) => ({
	state: {
		isDarkModeActive: false,
	},
	actions: {
		toggleTheme: () =>
			set(({ state }) => ({
				state: {
					isDarkModeActive: !state.isDarkModeActive,
				},
			})),
	},
}));

export default useThemeStore;
