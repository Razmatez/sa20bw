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
				yellow: "#FFFF00",
				darkGreen: "#009426",
				green: "#00FF00",
				grey: "#C3C3C3",
				lightGrey: "#F5F5F5",
				brightBlue: "#0000FF",
				electricBlue: "#00A0FF",
				red: "#BE0010",
				magenta: "#FD00BE",
			},
			fontFamily: {
				"barlow-semi-condensed": ["Barlow Semi Condensed", "sans-serif"],
				"Rubik": ["Rubik", "sans-serif"]
			},
		}
	},
	plugins: [
		require("flowbite/plugin")
	]
}
