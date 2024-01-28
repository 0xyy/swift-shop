"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CardDeleteProductDocument, CartSetProductQuantityDocument } from "@/gql/graphql";
import { revalidateTag } from "next/cache";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	if (!quantity) await executeGraphql({ query: CardDeleteProductDocument, variables: { itemId } });
	else {
		await executeGraphql({
			query: CartSetProductQuantityDocument,
			variables: {
				itemId,
				quantity,
			},
		});
	}

	revalidateTag("cart");
};
