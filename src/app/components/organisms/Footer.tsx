import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="mx-3 my-8 md:mx-0">
			<div className="flex justify-between border-t-2 border-gray-200 py-7 text-gray-700">
				<p className="text-center text-sm ">Copyright &copy; 2023</p>
				<div className="flex space-x-5">
					<p className="text-sm">
						<Link href="/privacy-policy">Pricacy Policy</Link>
					</p>
					<p className="text-sm">
						<Link href="/terms-conditions">Terms and conditions</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};
