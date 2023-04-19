/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{html,js,jsx}', './components/**/*.{html,js,jsx}', './styles/**/*.{js,jsx}'],
	mode: 'jit',
	theme: {
		fontFamily: {
			aurelio: [],
			montserrat: [],
		},
		extend: {
			colors: {
				'primary-black': '#40BAEB',
				'secondary-white': '#D59A00',
			},
			transitionTimingFunction: {
				'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
			},
		},
	},
	plugins: [],
};
