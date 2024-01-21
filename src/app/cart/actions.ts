"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CartSetProductQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	await executeGraphql(CartSetProductQuantityDocument, {
		itemId,
		quantity,
	});
};
