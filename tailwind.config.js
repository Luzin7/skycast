/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				bgFooter: {
					default: '#2c4252',
				},
				bgInput: '#f6fafd',
				themeBgLight: {
					primary: '#7db9e7',
					secondary: '#f9f9fa',
					warm: '#ec9ea5',
					cold: '#cce4f5',
				},
				themeBgDark: {
					primary: '#374047',
					secondary: '#606e79',
					warm: '#473737',
					cold: '#394d5c',
				},
				link: '#9bc9ed',
				themeTextLight: {
					highEmphasis: '#3c4043',
					highEmphasis2: '#f9f9fa',
					mediumEmphasis: '#666d72',
					lowEmphasis: '#828a91',
				},
				themeTextDark: {
					highEmphasis: '#f9f9fa',
					mediumEmphasis: '#bfc5c9',
					lowEmphasis: '#7f8b93',
				},
			},
		},
	},
	plugins: [],
};
