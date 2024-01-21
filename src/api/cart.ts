import {
	CardAddProductDocument,
	CartCreateDocument,
	CartFragment,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";
import { cookies } from "next/headers";

export async function getOrCreateCart(): Promise<CartFragment> {
	const existingCart = await getCartFromCookies();
	if (existingCart) return existingCart;
	const cart = await createCart();
	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}
	return cart.createOrder;
}

export async function addToCart(orderId: string, productId: string) {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id: productId });
	if (!product) {
		throw new Error("Product not found");
	}
	await executeGraphql(CardAddProductDocument, {
		orderId,
		productId,
		total: product.price,
	});
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphql(CartGetByIdDocument, { id: cartId });
		if (cart.order) {
			return cart.order;
		}
	}
}

async function createCart() {
	return executeGraphql(CartCreateDocument, {});
}
