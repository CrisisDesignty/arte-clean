/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Primary Colors (Navy Blue)
				primary: {
					DEFAULT: '#223957',
					light: '#2d4a6f',
					dark: '#1a2d45',
				},
				// Secondary Colors (Sky Blue)
				secondary: {
					DEFAULT: '#498fc1',
					light: '#5fa3d4',
					dark: '#3a7aa8',
				},
				// Accent Colors (Coral)
				accent: {
					DEFAULT: '#ff766c',
					light: '#ff8f87',
					dark: '#e65d54',
				},
				// Neutral Colors
				neutral: {
					50: '#f8f9fa',
					100: '#f1f3f5',
					200: '#e9ecef',
					300: '#dee2e6',
					400: '#ced4da',
					500: '#adb5bd',
					600: '#6c757d',
					700: '#495057',
					800: '#343a40',
					900: '#212529',
				},
				// Semantic Colors
				success: '#28a745',
				warning: '#ffc107',
				error: '#dc3545',
				info: '#17a2b8',
			},
			fontFamily: {
				heading: ['Poppins', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
