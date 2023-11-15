import { ProductItemList } from "../components/organisms/ProductItemList";
import { getProductsList } from "@/api/products";

export default async function ProductsPage() {
	const products = await getProductsList();

	return (
		<section>
			<ProductItemList products={products} />
		</section>
	);
}
