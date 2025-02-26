"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({
	href,
	children,
	exact = false,
	className,
	activeClassName,
}: {
	href: string;
	children: ReactNode;
	exact?: boolean;
	className: string;
	activeClassName: string;
}) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={{ pathname: href }}
			className={clsx(`${className}`, {
				[`${activeClassName}`]: isActive,
			})}
			{...(isActive ? { "aria-current": "page" } : {})}
		>
			{children}
		</Link>
	);
};
