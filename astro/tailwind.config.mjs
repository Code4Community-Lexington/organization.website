/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	//TODO: Alternate theme for dark mode?
	theme: {
		extend: {
			colors: {
				"bg-primary": "#e5e1da",
				"bg-secondary-1": "#37928d",
				"bg-secondary-2": "#e07a5f",
				"bg-secondary-3": "#8fbb98",
				"text": "#272d2a"
			},
			//TODO: Solidify font choice
			fontFamily: {
				"source-sans-pro": ["Source Sans Pro", "sans"],
				"inter": ["Inter Variable", "sans"]
			},
		},
	},
	plugins: [],
}