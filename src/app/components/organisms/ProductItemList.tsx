import { ProductListItemFragment } from "@/gql/graphql";
import { ProductItem } from "../molecules/ProductItem";

export const ProductItemList = ({ products }: { products: ProductListItemFragment[] }) => {
	return (
		<ul
			className="grid grid-cols-1 gap-8 text-gray-700 md:grid-cols-2 lg:gap-12"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
};
