/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ejs}', './views/**/*.{html,js,ejs}'],
	theme: {
		extend: {
			colors: {
				d_darkblue: '#03101B',
				d_blue: '#0D3B66',
				d_beige: '#FAF0CA',
				d_yellow: '#F4D35E',
				d_secondary: '#EE964B',
				d_primary: '#F95738',
			},
		},
	},
	plugins: [],
};
