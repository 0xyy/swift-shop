import { getCartFromCookies } from "@/api/cart";
import { redirect } from "next/navigation";
import { CartItemList } from "../components/organisms/CarttemList";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
	}

	return (
		<section className="space-y-12">
			<h2 className="text-center text-2xl font-semibold sm:text-left md:text-4xl">Shopping cart</h2>
			<section className="flex flex-col space-y-16 xl:flex-row xl:space-x-10 xl:space-y-0">
				{cart.orderItems.length ? (
					<CartItemList cart={cart} />
				) : (
					<p className="font-medium text-gray-700">Your cart is currently empty.</p>
				)}
				{cart.orderItems.length > 0 && (
					<aside className="h-[300px] w-full bg-blue-200 xl:w-2/5">
						<button>ORDER</button>
					</aside>
				)}
			</section>
		</section>
	);
}
