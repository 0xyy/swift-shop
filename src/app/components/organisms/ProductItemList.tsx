import { ProductListItemFragment } from "@/gql/graphql";
import { ProductItem } from "../molecules/ProductItem";

export const ProductItemList = ({ products }: { products: ProductListItemFragment[] }) => {
	return (
		<ul
			className="grid grid-cols-1 justify-items-center gap-8 text-gray-700 sm:justify-items-stretch md:grid-cols-2 lg:gap-12"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
};
