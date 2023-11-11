/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				primary: ["var(--font-poppins)"],
				logo: ["var(--font-satisfy)"],
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography", function ({ addUtilities }) {
			const newUtilities = {
				".box-shadow-custom": {
					"box-shadow": "0 0 0 100vmax #ff0000",
				},
				".clip-path-custom": {
					"clip-path": "inset(0 -100vmax)",
				},
			};
			addUtilities(newUtilities, ["responsive", "hover"]);
		}),
	],
};
