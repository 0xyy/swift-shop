import { formatMoney } from "@/app/utils";
// import { graphql } from "@/gql";
// import { FragmentType, getFragmentData } from "@/gql/fragment-masking";
import type { ProductListItemFragment } from "@/gql/graphql";
import { ProductItemCategory } from "./ProductItemCategory";

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
	// product: FragmentType<typeof ProductItemDescription_Prodeuct>;
	product: ProductListItemFragment;
};

export const ProductItemDescription = async (props: ProductItemDescriptionProps) => {
	// const { name, categories, price } = getFragmentData(
	// 	ProductItemDescription_Product,
	// 	props.product,
	// );

	const { categories, name, price } = props.product;

	return (
		<div className="flex w-1/2 flex-col justify-center space-y-8 pl-14 md:pl-1 lg:pl-4">
			{categories?.[0] && <ProductItemCategory category={categories[0].name} />}
			<h3 className="text-xl font-bold md:text-2xl">{name}</h3>
			<p className="text-md font-semibold md:text-lg">{`${formatMoney(price / 100)}`}</p>
		</div>
	);
};
