"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { generatePagination } from "@/app/utils";
import { PaginationNumber, type PaginationNumberPosition } from "../atoms/PaginationNumber";
import { PaginationArrow } from "../atoms/PaginationArrow";

export const Pagination = ({ totalPages }: { totalPages: number }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;

	const createPageURL = (pageNumber: string | number) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	const allPages = generatePagination(currentPage, totalPages);

	return (
		<div className="flex items-center justify-center">
			<PaginationArrow
				direction="left"
				href={createPageURL(currentPage - 1)}
				isDisabled={currentPage <= 1}
			/>
			<div className="flex">
				{allPages.map((page, index) => {
					let position: PaginationNumberPosition;

					if (index === 0) position = "first";
					if (index === allPages.length - 1) position = "last";
					if (allPages.length === 1) position = "single";
					if (page === "...") position = "middle";

					return (
						<PaginationNumber
							key={index}
							page={page}
							href={`${createPageURL(page)}`}
							isActive={currentPage === page}
							position={position}
						/>
					);
				})}
			</div>
			<PaginationArrow
				direction="right"
				href={createPageURL(currentPage + 1)}
				isDisabled={currentPage >= totalPages}
			/>
		</div>
	);
};
