import { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins, Satisfy } from "next/font/google";
import { Nav } from "./components/organisms/Nav";
import { Footer } from "./components/organisms/Footer";

import "./globals.css";

const poppins = Poppins({
	subsets: ["latin", "latin-ext"],
	variable: "--font-poppins",
	weight: ["700", "600", "500", "400", "300"],
	display: "swap",
});
const satisfy = Satisfy({
	subsets: ["latin"],
	variable: "--font-satisfy",
	weight: ["400"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "SwiftShop",
	description: "SwiftShop Online",
};

//backgrouind color full
// bg-full-w bg-amber-400  shadow-[0_0_0_100vmax] shadow-amber-400

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} ${satisfy.variable} mx-auto max-w-lg sm:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[1280px]`}
			>
				<Nav />
				<main className="mx-3 my-8 md:mx-0 lg:my-14">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
