import { getProductByCategorySlug, getProductsTotalPagesByCategorySlug } from "@/api/products";
import { ProductItemCategory } from "@/components/atoms/ProductItemCategory";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductItemList } from "@/components/organisms/ProductItemList";

export default async function ProductsCategoryPage({
	params: { category },
	searchParams: { page },
}: {
	params: { category: string };
	searchParams: { page?: number };
}) {
	const currentPage = Number(page) || 1;
	const categoryProducts = await getProductByCategorySlug(category, currentPage);
	const totalPages = await getProductsTotalPagesByCategorySlug(category);

	return (
		<section className="flex flex-col space-y-12">
			<div className="space-y-3">
				<h2 className="text-left text-2xl font-semibold capitalize md:text-4xl">
					Discover our {category}
				</h2>
				<ProductItemCategory category={category} />
			</div>
			{categoryProducts?.length && <ProductItemList products={categoryProducts} />}
			<Pagination totalPages={totalPages} />
		</section>
	);
}
