import { ProductItemList } from "./ProductItemList";
import { getProductsList } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async () => {
	const products = await getProductsList(1);
	// await sleep(3000);
	return <ProductItemList products={products.slice(-4)} />;
};
