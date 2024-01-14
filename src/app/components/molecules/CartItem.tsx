import Link from "next/link";
import { ProductItemImage } from "../atoms/ProductItemImage";
import { formatMoney } from "@/app/utils";
import { ProductListItemFragment } from "@/gql/graphql";
import { IncrementProductQuantity } from "@/app/cart/IncrementProductQuantity";

export const CartItem = ({
	product,
	quantity,
}: {
	product: ProductListItemFragment;
	quantity: number;
}) => {
	console.log({ product, quantity });

	return (
		<li>
			<div className="my-3 flex flex-row items-center justify-between py-1">
				<Link href={`/product/${product.id}`}>
					<div className="flex items-center space-x-2 sm:space-x-6">
						{product?.images[0] && (
							<ProductItemImage
								src={product.images[0].url}
								alt={product.name}
								className="h-24 w-24 md:h-36 md:w-36 lg:w-40"
							/>
						)}
						<p>{product.name}</p>
					</div>
				</Link>
				<div className="flex items-center space-x-4 sm:space-x-8 md:space-x-12">
					<form className="space-x-2">
						<IncrementProductQuantity quantity={quantity} itemId={product.id} />
					</form>
					<p>{formatMoney((product.price * quantity) / 100)}</p>
				</div>
			</div>
		</li>
	);
};
