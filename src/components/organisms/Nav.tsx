"use client";
import { ReactNode, useState } from "react";
import { ActiveLink } from "../atoms/ActiveLink";
import { Logo } from "../atoms/Logo";
import clsx from "clsx";
import { useWindowSize } from "@/hooks/useWindowSize";
import { NAV_ITEMS } from "@/constants/nav";
import { X, Menu } from "lucide-react";

export const Nav = ({ children }: { children: ReactNode }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { isOverLg } = useWindowSize();

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className="border-b-2 border-gray-200">
			<div className="mx-auto flex flex-wrap items-center justify-between px-3 py-7">
				<Logo />

				<div className="flex items-center lg:hidden">
					{!isOverLg && <div>{children}</div>}
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
							"h-[260px]": menuOpen && !isOverLg,
							"h-0 overflow-hidden": !menuOpen && !isOverLg,
						},
					)}
					id="navbar-hamburger"
				>
					<ul className="mt-4 flex flex-col rounded-lg bg-gray-100 font-medium lg:mt-0 lg:flex-row lg:space-x-4 lg:bg-transparent">
						{NAV_ITEMS.map((item) => (
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
				{isOverLg && <div className="ml-2">{children}</div>}
			</div>
		</nav>
	);
};
