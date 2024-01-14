import clsx from "clsx";
import Link from "next/link";
import { FC, ReactNode } from "react";

type ButtonSize = "small" | "medium" | "large";

type ButtonStyle = "primary" | "secondary";

type ButtonType = "button" | "submit";

export type ButtonProps = {
	size: ButtonSize;
	style: ButtonStyle;
	type: ButtonType;
	children: ReactNode;
	href?: string;
	className?: string;
	isFullWidth?: boolean;
	uppercase?: boolean;
	disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
	size,
	style,
	type,
	children,
	href,
	className,
	isFullWidth = false,
	uppercase = false,
	disabled = false,
}) => {
	const base = clsx(
		"flex items-center gap-x-2 justify-center rounded-lg transistion-colors ease-in-out duration-150 shadow-md disabled:cursor-wait",
		className,
		{
			"w-full": isFullWidth,
			"w-fit": !isFullWidth,
			uppercase: uppercase,
			"text-sm px-6 py-3": size === "small",
			"text-md px-8 py-4": size === "medium",
			"text-lg px-10 py-4": size === "large",
		},
	);

	const buttonStyles = {
		primary: clsx("text-gray-50 bg-gray-700 hover:bg-gray-800 disabled:bg-gray-300", base),
		secondary: clsx("text-gray-50 bg-pink-400 hover:bg-pink-500 disabled:bg-pink-200", base),
	};

	if (href) {
		return (
			<Link href={{ pathname: href }}>
				<button type={type} disabled={disabled} className={`${buttonStyles[style]}`}>
					{children}
				</button>
			</Link>
		);
	}

	return (
		<button type={type} disabled={disabled} className={`${buttonStyles[style]}`}>
			{children}
		</button>
	);
};
