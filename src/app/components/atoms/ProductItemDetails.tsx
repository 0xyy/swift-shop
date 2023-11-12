import { ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/app/utils";

export const ProductItemDetails = ({ product }: { product: ProductListItemFragment }) => {
	const { name, price, description } = product;
	return (
		<div className="flex w-full flex-col space-y-7 lg:w-1/2">
			<h3 className="text-2xl font-bold md:text-4xl">{name}</h3>
			<p className="text-lg font-semibold md:text-xl">{`${formatMoney(price / 100)}`}</p>
			<p>{description}</p>
		</div>
	);
};
