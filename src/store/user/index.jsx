import { create } from 'zustand';

const useUserStore = create((set) => ({
	state: {
		userGeolocation: null,
		userQuery: null,
	},
	actions: {
		updateUserGeolocation: (userGeolocation) =>
			set(({ state }) => ({
				state: {
					...state,
					userGeolocation: {
						...state.userGeolocation,
						...userGeolocation,
					},
				},
			})),
	},
	updateUserQuery: (userQuery) =>
		set(({ state }) => ({
			state: {
				...state,
				userQuery: {
					...state.userQuery,
					...userQuery,
				},
			},
		})),
}));

export default useUserStore;
