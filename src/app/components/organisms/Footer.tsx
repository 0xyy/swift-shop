import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="mx-3 my-8 md:mx-0">
			<div className="items-between flex flex-col justify-between space-y-5 border-t-2 border-gray-200 py-7 text-sm text-gray-700 sm:flex-row sm:space-y-0">
				<p className="self-start text-center">Copyright &copy; 2023</p>
				<div className="flex justify-between space-x-5">
					<p className="transition-colors duration-75 hover:text-gray-800">
						<Link href="/privacy-policy">Privacy Policy</Link>
					</p>
					<p className="transition-colors duration-75 hover:text-gray-800">
						<Link href="/terms-conditions">Terms and conditions</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};
