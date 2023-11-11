import { getProductByCategorySlug } from "@/api/products";
import { ProductItemList } from "@/app/components/organisms/ProductItemList";

export default async function ProductsCategoryPage({
	params: { category, pageNumber },
}: {
	params: { category: string; pageNumber: string };
}) {
	const categoryProducts = await getProductByCategorySlug(category);

	return (
		<section>
			<h2>
				Category: {category} of page number {pageNumber}
			</h2>
			{categoryProducts?.length && <ProductItemList products={categoryProducts} />}
		</section>
	);
}
