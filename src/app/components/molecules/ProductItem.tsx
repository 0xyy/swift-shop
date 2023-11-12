import Link from "next/link";
import { ProductItemDescription } from "../atoms/ProductItemDescription";
import { ProductItemImage } from "../atoms/ProductItemImage";
import { ProductListItemFragment } from "@/gql/graphql";

export const ProductItem = ({ product }: { product: ProductListItemFragment }) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<div className="flex rounded-xl border-2 border-gray-100 bg-neutral-50 p-3 shadow-lg transition duration-300 hover:scale-105 active:scale-110">
					{product.images[0] && <ProductItemImage src={product.images[0].url} alt={product.name} />}
					<ProductItemDescription product={product} />
				</div>
			</Link>
		</li>
	);
};
