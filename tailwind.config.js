/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./public/**/*.html",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
	      "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			// Primary colors
			darkBlue: "#0A003E",
			lightBlue: "#00FFFF",
			lime: "#DAFF00",
			brightGreen: "#59FF26",
			// Secondary colors
			black: "#000000",
			darkGrey: "#4D4D4D",
			darkYellow: "#DAFF00",
			yellow: "#ffff00",
			darkGreen: "#009426",
			green: "#00ff00",
			grey: "#c3c3c3",
			lightGrey: "#f5f5f5",
			brightBlue: "#0000FF",
			electricBlue: "#00a0ff",
			red: "#be0010",
			magenta: "#fd00be",
		}
	},
	plugins: [
		require("flowbite/plugin")
	]
}
