/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./public/**/*.html",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
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
				"barlow": ["Barlow Semi Condensed Bold", "sans-serif"],
				"rubik": ["Rubik", "sans-serif"],
				"rubik-medium": ["Rubik Medium", "sans-serif"]
			},
			fontSize: {
				// Headings
				h1: ["32px", {
					lineHeight: "36px",
					letterSpacing: "0.015em"
				  }],
				h2: ["24px", {
					lineHeight: "32px",
					letterSpacing: "0.015em"
				}],
				h3: ["24px", {
					lineHeight: "28px",
					letterSpacing: "0.015em"
				}],
				h4: ["20px", {
					lineHeight: "24px",
					letterSpacing: "0.015em"
				}],
				h5: ["16px", {
					lineHeight: "20px",
					letterSpacing: "0.015em"
				}],

				// Body
				xl: ["20px", {
					lineHeight: "28px",
					letterSpacing: "0.015em"
				}],
				lg: ["18px", {
					lineHeight: "24px",
					letterSpacing: "0.015em"
				}],
				base: ["16px", {
					lineHeight: "24px",
					letterSpacing: "0.01em"
				}],
				sm: ["14px", {
					lineHeight: "20px",
					letterSpacing: "0.005em"
				}],
				xs: ["12px", {
					lineHeight: "16px",
					letterSpacing: "0.005em"
				}],
			}
		}
	},
	plugins: [
		require("flowbite/plugin")
	]
}
