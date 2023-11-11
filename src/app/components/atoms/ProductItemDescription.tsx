import { formatMoney } from "@/app/utils";
// import { graphql } from "@/gql";
// import { FragmentType, getFragmentData } from "@/gql/fragment-masking";
import type { ProductListItemFragment } from "@/gql/graphql";

// const ProductItemDescription_Product = graphql(/* GraphQL */ `
// 	fragment ProductItemDescription_Product on Product {
// 		name
// 		categories(first: 1) {
// 			name
// 		}
// 		price
// 	}
// `);

type ProductItemDescriptionProps = {
	// product: FragmentType<typeof ProductItemDescription_Product>;
	product: ProductListItemFragment;
};

export const ProductItemDescription = (props: ProductItemDescriptionProps) => {
	// const { name, categories, price } = getFragmentData(
	// 	ProductItemDescription_Product,
	// 	props.product,
	// );

	const { categories, name, price } = props.product;

	return (
		<div className="flex flex-col justify-center p-4 align-middle">
			<h3 className="text-md font-bold">{name}</h3>
			{categories?.[0] && <span>{categories[0].name}</span>}
			<p className="text-sm font-semibold">{`${formatMoney(price)}`}</p>
		</div>
	);
};
