import clsx from "clsx";
import Link from "next/link";

export type PaginationNumberPosition = "first" | "last" | "middle" | "single" | undefined;

export const PaginationNumber = ({
	page,
	isActive,
	href,
	position,
}: {
	page: number | string;
	isActive: boolean;
	href: string;
	position: PaginationNumberPosition;
}) => {
	const className = clsx("flex h-10 w-10 items-center justify-center border border-gray-200 p-2", {
		"rounded-l-md": position === "first" || position === "single",
		"rounded-r-md": position === "last" || position === "single",
		"border-gray-700 bg-gray-700 text-white": isActive,
		"hover:bg-gray-200": !isActive && position !== "middle",
		"text-gray-300": position === "middle",
	});

	return isActive || position === "middle" ? (
		<div className={className}>{page}</div>
	) : (
		<Link
			href={{
				pathname: href.split("?")[0],
				query: { page: href.split("=")[1] },
			}}
			className={className}
		>
			{page}
		</Link>
	);
};
