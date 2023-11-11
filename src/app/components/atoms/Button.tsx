import { FC, ReactNode } from "react";

type ButtonSize = "sm" | "md" | "lg";

type ButtonStyle = "primary" | "secondary";

type ButtonType = "button" | "submit";

export type ButtonProps = {
	size: ButtonSize;
	style: ButtonStyle;
	type: ButtonType;
	children: ReactNode;
	fullWidth?: boolean;
	uppercase?: boolean;
	className?: string;
};

export const Button: FC<ButtonProps> = ({
	size,
	style,
	type,
	fullWidth,
	children,
	uppercase,
	className,
}) => {
	const base = `flex items-center gap-x-2 justify-center rounded-lg ${
		fullWidth ? "w-full" : "w-fit"
	} ${uppercase ? "uppercase" : ""} ${className}`;
	const buttonStyles = {
		primary: `px-10 py-4 text-gray-50 bg-gray-700 text-${size} ${base}`,
	};

	return (
		<button type={type} className={`${buttonStyles[style]}`}>
			{children}
		</button>
	);
};
