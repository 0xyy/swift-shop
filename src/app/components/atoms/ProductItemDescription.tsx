import { formatMoney } from "@/app/utils";

export const ProductItemDescription = ({ name, price }: { name: string; price: number }) => {
	return (
		<div className="flex flex-col justify-center align-middle">
			<h3 className="text-md font-bold">{name}</h3>
			<p className="text-sm font-semibold">{`${formatMoney(price)}`}</p>
		</div>
	);
};
