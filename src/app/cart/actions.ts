"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CardDeleteProductDocument, CartSetProductQuantityDocument } from "@/gql/graphql";
import { revalidateTag } from "next/cache";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	if (!quantity) return await deleteItem(itemId);

	await executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: {
			itemId,
			quantity,
		},
	});

	revalidateTag("cart");
};

export const deleteItem = async (itemId: string) => {
	await executeGraphql({ query: CardDeleteProductDocument, variables: { itemId } });
	revalidateTag("cart");
};
