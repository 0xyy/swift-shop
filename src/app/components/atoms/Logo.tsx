import Link from "next/link";

export const Logo = () => {
	return (
		<Link href="/">
			<div className="flex items-center justify-center">
				<span className="self-center whitespace-nowrap font-logo text-2xl text-gray-700 md:text-3xl">
					SwiftShop
				</span>
			</div>
		</Link>
	);
};
