import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "./ActiveLink";

export const ShoppingCartIcon = ({
	menuOpen,
	className,
}: {
	menuOpen: boolean;
	className: string;
}) => {
	return (
		<div className={`${menuOpen ? "block" : "hidden"} ${className}`}>
			<ActiveLink
				href="/cart"
				className="block rounded-lg p-3 text-stone-900 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
				activeClassName="text-stone-900"
			>
				<ShoppingCart size={20} />
			</ActiveLink>
		</div>
	);
};
