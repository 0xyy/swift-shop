import clsx from "clsx";

export const ProductItemCategory = async ({ category }: { category: string }) => {
	const slugCategory = category.toLowerCase();

	return (
		<p
			className={clsx(
				"flex w-max px-2 py-1 text-xs font-semibold capitalize text-gray-600 lg:px-3",
				{
					"bg-red-100": slugCategory === "t-shirts",
					"bg-blue-100": slugCategory === "hoodies",
					"bg-green-100": slugCategory === "accessories",
				},
			)}
		>
			{category} Collection
		</p>
	);
};
