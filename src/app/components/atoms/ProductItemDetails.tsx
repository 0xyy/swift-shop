import { ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/app/utils";
import { Check } from "lucide-react";

export const ProductItemDetails = ({ product }: { product: ProductListItemFragment }) => {
	const { name, price, description } = product;

	return (
		<div className="flex flex-col space-y-4">
			<h3 className="text-2xl font-bold md:text-4xl">{name}</h3>
			<p className="flex w-fit items-center space-x-1 text-sm font-semibold">
				<Check className="text-green-600" /> <span>In stock</span>
			</p>
			<p className="text-lg font-semibold md:text-xl">{`${formatMoney(price / 100)}`}</p>
			<p>
				{description.split(" ").length > 100
					? description.split(" ").slice(25).join(" ") + "..."
					: description}
			</p>
		</div>
	);
};
