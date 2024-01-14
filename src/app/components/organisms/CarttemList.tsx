import { CartFragment, ProductListItemFragment } from "@/gql/graphql";
import { CartItem } from "../molecules/CartItem";

export const CartItemList = ({ cart }: { cart: CartFragment }) => {
	return (
		<ul className="w-full divide-y-2 divide-gray-200 xl:w-3/5">
			{cart.orderItems.map((item) => (
				<CartItem
					key={item.id}
					quantity={item.quantity}
					product={item.product as ProductListItemFragment}
				/>
			))}
		</ul>
	);
};
