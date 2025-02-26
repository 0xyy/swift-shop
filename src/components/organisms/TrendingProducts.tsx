import { getProductsList } from "@/api/products";
import { ProductItemList } from "./ProductItemList";
import { TrendingUp } from "lucide-react";
import { Subtitle } from "../atoms/Subtitle";

export const TrendingProducts = async () => {
	const products = await getProductsList(1);

	return (
		<section className="flex flex-col space-y-10">
			<Subtitle title="Trending" text="Most Popular" icon={<TrendingUp />} />
			<ProductItemList products={products.slice(-4)} />
		</section>
	);
};
