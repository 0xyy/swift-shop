import { ProductItem } from "../molecules/ProductItem";
import { type Product } from "../types";

export const ProductItemList = ({ products }: { products: Product[] }) => {
	return (
		<ul className="w-100 flex flex-grow flex-row justify-around" data-testid="products-list">
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
};
