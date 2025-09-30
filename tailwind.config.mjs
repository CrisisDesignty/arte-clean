/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					blue: '#0057FF',
				},
				neutral: {
					gray: '#4A4A4A',
				},
				light: {
					gray: '#F8F9FA',
				},
			},
			fontFamily: {
				heading: ['Poppins', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
