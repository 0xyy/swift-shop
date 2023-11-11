import Link from "next/link";
import { ProductItemDescription } from "../atoms/ProductItemDescription";
import { ProductItemImage } from "../atoms/ProductItemImage";
import { ProductListItemFragment } from "@/gql/graphql";

export const ProductItem = ({ product }: { product: ProductListItemFragment }) => {
	return (
		<li className="m-3">
			<Link href={`/product/${product.id}`}>
				<div className="flex flex-col rounded-lg border-2 bg-slate-100">
					{product.images[0] && <ProductItemImage src={product.images[0].url} alt="" />}
					<ProductItemDescription product={product} />
				</div>
			</Link>
		</li>
	);
};
