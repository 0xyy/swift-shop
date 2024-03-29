import { TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables>({
	query,
	variables = {},
	next,
	cache,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	variables?: TVariables | {};
	next?: NextFetchRequestConfig;
	cache?: RequestCache;
}): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) throw new TypeError("GRAPHQL_URL is not defined");

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
		},
		next,
		cache,
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError(`GrahpQL Errror`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
