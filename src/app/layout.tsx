import { ReactNode } from "react";
import type { Metadata } from "next";
import { Footer } from "@/components/organisms/Footer";
import { Nav } from "@/components/organisms/Nav";
import { ShoppingCartIcon } from "@/components/atoms/ShoppingCartIcon";
import clsx from "clsx";
import { poppins, satisfy } from "@/constants/fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "SwiftShop",
	description: "SwiftShop Online",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body
				className={clsx(
					poppins.variable,
					satisfy.variable,
					"mx-auto max-w-lg  sm:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[1280px]",
				)}
			>
				<Nav>
					<ShoppingCartIcon />
				</Nav>
				<main className="mx-3 my-8 md:mx-0 lg:my-14">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
