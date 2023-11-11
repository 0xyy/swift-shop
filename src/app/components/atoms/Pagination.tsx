import { ActiveLink } from "./ActiveLink";

export const Pagination = () => {
	return (
		<div>
			<ActiveLink
				href="/products/1"
				className="text-blue-400 hover:text-blue-600"
				activeClassName="underline font-bold text-blue-700"
				exact
			>
				Strona 1
			</ActiveLink>
			<ActiveLink
				href="/products"
				className="text-blue-400 hover:text-blue-600"
				activeClassName="underline font-bold text-blue-700"
				exact
			>
				Wszystkie produkty
			</ActiveLink>
		</div>
	);
};
