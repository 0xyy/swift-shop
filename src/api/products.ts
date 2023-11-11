import {
	ProductGetByIdDocument,
	ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";
import { notFound } from "next/navigation";

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});
	return graphqlResponse.products;
};

export const getProductByCategorySlug = async (categorySlug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
	});
	return graphqlResponse.categories[0]?.products;
};

export const getProductById = async (id: ProductListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, { id });
	if (!graphqlResponse.product) return notFound();
	return graphqlResponse.product;
};
