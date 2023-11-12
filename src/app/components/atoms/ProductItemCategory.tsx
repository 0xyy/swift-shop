export const ProductItemCategory = async ({ category }: { category: string }) => {
	const color = {
		"T-Shirts": "bg-red-100",
		Hoodies: "bg-blue-100",
		Accessories: "bg-green-100",
	} as any;

	return (
		<p
			className={`flex w-max ${color[category]} px-2 py-1 text-xs font-semibold text-gray-600 lg:px-3`}
		>
			{category} Collection
		</p>
	);
};
