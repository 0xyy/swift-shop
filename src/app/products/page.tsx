import { Pagination } from "../components/molecules/Pagination";
import { ProductItemList } from "../components/organisms/ProductItemList";
import { getProductsList, getProductsTotalPages } from "@/api/products";

export default async function ProductsPage({ searchParams }: { searchParams: { page?: number } }) {
	const currentPage = Number(searchParams?.page) || 1;
	const products = await getProductsList(currentPage);

	const totalPages = await getProductsTotalPages();

	return (
		<section className="flex flex-col gap-y-12">
			<h2 className="text-center text-2xl font-semibold sm:text-left md:text-4xl">All products</h2>
			<ProductItemList products={products} />
			<Pagination totalPages={totalPages} />
		</section>
	);
}
