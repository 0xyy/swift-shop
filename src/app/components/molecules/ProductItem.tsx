import { ProductItemDescription } from "../atoms/ProductItemDescription";
import { ProductItemImage } from "../atoms/ProductItemImage";
import { type Product } from "../types";

export const ProductItem = ({ product }: { product: Product }) => {
	return (
		<li
			className="p flex h-60 w-60 flex-col justify-between rounded-lg border-2 bg-slate-100 px-3 py-4"
			data-testid="products-list"
		>
			<ProductItemImage {...product.coverImage} />
			<ProductItemDescription name={product.name} price={product.price} />
		</li>
	);
};
