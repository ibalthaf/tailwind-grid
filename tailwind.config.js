/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	screens: {
		sm: '480px',
		md: '768px',
		lg: '976px',
		xl: '1440',
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow Semi Condensed', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
