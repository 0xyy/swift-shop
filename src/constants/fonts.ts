import { Poppins, Satisfy } from "next/font/google";

export const poppins = Poppins({
	subsets: ["latin", "latin-ext"],
	variable: "--font-poppins",
	weight: ["700", "600", "500", "400", "300"],
	display: "swap",
});

export const satisfy = Satisfy({
	subsets: ["latin"],
	variable: "--font-satisfy",
	weight: ["400"],
	display: "swap",
});
