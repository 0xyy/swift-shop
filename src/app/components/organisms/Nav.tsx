"use client";
import { useState } from "react";
import { ActiveLink } from "../atoms/ActiveLink";
import { Logo } from "../atoms/Logo";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { ShoppingCartIcon } from "../atoms/ShoppingCartIcon";
import clsx from "clsx";
import Link from "next/link";

const navItems = [
	{
		href: "/",
		label: "Home",
		isExact: true,
	},
	{
		href: "/products",
		label: "Shop",
		isExact: true,
	},
	{
		href: "/products/t-shirts",
		label: "T-shirts",
		isExact: true,
	},
	{
		href: "/products/hoodies",
		label: "Hoodies",
		isExact: true,
	},
	{
		href: "/products/accessories",
		label: "Accessories",
		isExact: true,
	},
	{
		href: "/blog",
		label: "Blog",
		isExact: false,
	},
];

export const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className="border-b-2 border-gray-200">
			<div className="mx-auto flex flex-wrap items-center justify-between px-3 py-7 lg:px-0">
				<Logo />
				<div className="flex items-center lg:hidden">
					<ShoppingCartIcon menuOpen={menuOpen} className="lg:hidden" />
					<button
						data-collapse-toggle="navbar-hamburger"
						type="button"
						className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-stone-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
						aria-controls="navbar-hamburger"
						aria-expanded={menuOpen}
						onClick={toggleMenu}
					>
						{menuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>

				<div
					className={clsx(
						`w-full transition-all lg:flex lg:w-auto lg:items-center lg:overflow-visible`,
						{
							"h-[260px]": menuOpen,
							"h-0 overflow-hidden": !menuOpen,
						},
					)}
					id="navbar-hamburger"
				>
					<ul className="mt-4 flex flex-col rounded-lg bg-gray-100 font-medium lg:mt-0 lg:flex-row lg:space-x-4 lg:bg-transparent">
						{navItems.map((item) => (
							<li key={item.label}>
								<ActiveLink
									href={item.href}
									className="block rounded px-4 py-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white"
									activeClassName="text-stone-900"
									exact={item.isExact}
								>
									{item.label}
								</ActiveLink>
							</li>
						))}
					</ul>
				</div>
				<ShoppingCartIcon menuOpen={menuOpen} className="hidden lg:block" />
			</div>
		</nav>
	);
};
