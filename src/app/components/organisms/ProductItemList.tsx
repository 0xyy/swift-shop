import { ProductListItemFragment } from "@/gql/graphql";
import { ProductItem } from "../molecules/ProductItem";

export const ProductItemList = ({ products }: { products: ProductListItemFragment[] }) => {
	return (
		<ul className="flex flex-grow flex-wrap justify-evenly" data-testid="products-list">
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
};
