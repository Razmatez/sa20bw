/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./public/**/*.html",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			boxShadow: {
				1: "0px 1px 3px 1px rgba(0, 0, 0, 0.06), 0px 1px 2px 0px rgba(0, 0, 0, 0.2)",
				2: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
				3: "0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
				4: "0px 2px 3px 0px rgba(0, 0, 0, 0.10), 0px 6px 10px 4px rgba(0, 0, 0, 0.05)",
				5: "0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)"
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
				darkYellow: "#FFB000",
				yellow: "#FFFF00",
				darkGreen: "#009426",
				green: "#00FF00",
				grey: "#C3C3C3",
				lightGrey: "#F5F5F5",
				brightBlue: "#0000FF",
				electricBlue: "#00A0FF",
				red: "#BE0010",
				magenta: "#FD00BE",

				// Dark blue shades
				darkBlue90: "#231A51",
				darkBlue80: "#3B3365",
				darkBlue70: "#544D78",
				darkBlue60: "#6C668B",
				darkBlue50: "#85809F",
				darkBlue40: "#9D99B2",
				darkBlue30: "#B6B3C5",
				darkBlue20: "#CECCD8",
				darkBlue10: "#E7E6EC"
			},
			container: {
				center: true
			},
			fontFamily: {
				"barlow": ["Barlow Semi Condensed Bold", "sans-serif"],
				"rubik": ["Rubik", "sans-serif"],
				"rubik-medium": ["Rubik Medium", "sans-serif"]
			},
			fontSize: {
				// Headings
				h1: ["56px", {
					lineHeight: "68px",
					letterSpacing: "0.015em"
				}],
				h2: ["40px", {
					lineHeight: "44px",
					letterSpacing: "0.015em"
				}],
				h3: ["32px", {
					lineHeight: "36px",
					letterSpacing: "0.015em"
				}],
				h4: ["24px", {
					lineHeight: "32px",
					letterSpacing: "0.015em"
				}],
				h5: ["24px", {
					lineHeight: "28px",
					letterSpacing: "0.015em"
				}],
				h6: ["20px", {
					lineHeight: "24px",
					letterSpacing: "0.015em"
				}],
				h7: ["16px", {
					lineHeight: "20px",
					letterSpacing: "0.015em"
				}],

				// Body
				xl: ["20px", {
					lineHeight: "32px",
					letterSpacing: "0.015em"
				}],
				lg: ["18px", {
					lineHeight: "28px",
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
					lineHeight: "18px",
					letterSpacing: "0.005em"
				}],
			},
			spacing: {
				15: "60px",
				16: "64px",
				17: "68px",
				18: "72px"
			}
		}
	},
	plugins: [
		require("flowbite/plugin")
	]
}
