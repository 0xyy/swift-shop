import Link from "next/link";
import { ProductListItemFragment } from "@/gql/graphql";
import { ProductItemImage } from "../atoms/ProductItemImage";
import { ProductItemDescription } from "../atoms/ProductItemDescription";

export const ProductItem = ({ product }: { product: ProductListItemFragment }) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<div className="flex w-80 flex-col rounded-xl border-2 border-gray-100 bg-neutral-50 p-3 shadow-lg transition duration-300 hover:scale-105 active:scale-110 sm:w-full sm:flex-row">
					{product.images[0] && (
						<ProductItemImage
							src={product.images[0].url}
							alt={product.name}
							className="h-60 w-full md:h-72 md:w-1/2"
						/>
					)}
					<ProductItemDescription product={product} />
				</div>
			</Link>
		</li>
	);
};
