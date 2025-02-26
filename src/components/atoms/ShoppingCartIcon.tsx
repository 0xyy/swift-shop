import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "./ActiveLink";
import { getCartFromCookies } from "@/api/cart";

export const ShoppingCartIcon = async () => {
	const cart = await getCartFromCookies();

	const cartCount = cart?.orderItems.reduce((prev, item) => prev + item.quantity, 0) ?? "";
	console.log({ cartCount });
	return (
		<div>
			<ActiveLink
				href="/cart"
				className="flex h-10 items-center gap-2 rounded-lg px-3 text-stone-900 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
				activeClassName="text-stone-900"
			>
				{!!cartCount && cartCount}

				<ShoppingCart size={18} className="text-stone-900" />
			</ActiveLink>
		</div>
	);
};
