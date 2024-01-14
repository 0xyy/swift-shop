import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "./ActiveLink";
import { clsx } from "clsx";

export const ShoppingCartIcon = ({
	menuOpen,
	className,
}: {
	menuOpen: boolean;
	className: string;
}) => {
	return (
		<div
			className={clsx(className, {
				block: menuOpen,
				hidden: !menuOpen,
			})}
		>
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
