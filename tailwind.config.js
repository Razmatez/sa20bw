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
				"rubik": ["Rubik", "sans-serif"]
			},
			fontSize: {
				xs: ["12px", "16px"],
				sm: ["14px", "20px"],
				base: ["16px", "24px"],
				lg: ["18px", "24px"],
				xl: ["20px", "28px"]
			}
		}
	},
	plugins: [
		require("flowbite/plugin")
	]
}
