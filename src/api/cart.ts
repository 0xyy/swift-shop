import {
	CardAddProductDocument,
	CartCreateDocument,
	CartFragment,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export async function getOrCreateCart(): Promise<CartFragment> {
	const existingCart = await getCartFromCookies();
	if (existingCart) return existingCart;

	const cart = await createCart();
	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", cart.createOrder.id, {
		httpOnly: true,
		sameSite: "lax",
	});

	return cart.createOrder;
}

export async function addToCart(orderId: string, productId: string) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
	});

	if (!product) {
		throw new Error("Product not found");
	}

	await executeGraphql({
		query: CardAddProductDocument,
		variables: {
			orderId,
			productId,
			total: product.price,
		},
		next: {
			tags: ["cart"],
		},
	});

	revalidateTag("cart");
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) return;

	const cart = await executeGraphql({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		next: {
			tags: ["cart"],
		},
	});

	if (cart.order) {
		return cart.order;
	}
}

async function createCart() {
	return executeGraphql({ query: CartCreateDocument });
}
