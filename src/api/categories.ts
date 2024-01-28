import { CategoriesGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";

export const getCategoriesList = async () => {
	const graphqlResponse = await executeGraphql({ query: CategoriesGetListDocument });
	return graphqlResponse.categories;
};
