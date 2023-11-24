import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export const PaginationArrow = ({
	href,
	direction,
	isDisabled,
}: {
	href: string;
	direction: "left" | "right";
	isDisabled: boolean;
}) => {
	// ..?page=2
	const className = clsx(
		"flex h-10 w-10 items-center justify-center rounded-md border p-2 border-gray-200",
		{
			"mr-2 md:mr-4": direction === "left",
			"ml-2 md:ml-4": direction === "right",
			"pointer-events-none text-gray-200": isDisabled,
			"transition duration-150 ease-in-out hover:bg-gray-700 hover:text-white": !isDisabled,
		},
	);

	const icon = direction === "left" ? <ArrowLeft /> : <ArrowRight />;

	return isDisabled ? (
		<div className={className}>{icon}</div>
	) : (
		<Link
			href={{
				pathname: href.split("?")[0],
				query: { page: href.split("=")[1] },
			}}
			className={className}
		>
			{icon}
		</Link>
	);
};
