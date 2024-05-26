/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"bg-primary": "#272d2a",
				"bg-secondary-1": "#8fbb98",
				"bg-secondary-2": "#37928d",
				"bg-secondary-3": "#e3c699"
			},
			fontFamily: {
				"source-sans-pro": ["Source Sans Pro", "sans"]
			},
		},
	},
	plugins: [],
}
