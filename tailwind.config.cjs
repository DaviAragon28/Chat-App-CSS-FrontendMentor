/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				paleViolet: '#d89eff',
				moderateViolet: '#9241c8',
				DesaturatedDarViolet: '#6e5d7e',
				GrayishBlue: '#c6cacd',
				VeryDarkDesaturatedViolet: '#3e2753',
				DarkGrayishViolet: '#a39daa',
				LightMagenta: '#e942ff',
				LightViolet: '#8838ff',
				LightGrayishViolet: '#f5f3f7',
				VeryLightMagenta: '#e570ff'
			}
		},
	},
	plugins: [],
}
