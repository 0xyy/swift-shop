import { Twitter } from "lucide-react";
import NextImage from "next/image";

export const Feedback = () => {
	return (
		<div className="bg-full-w flex flex-col space-y-10 bg-stone-100 py-10 shadow-[0_0_0_100vmax] shadow-stone-100">
			<header className="flex w-full items-center space-x-1">
				<p className="text-gradient text-xl font-semibold uppercase tracking-wide text-gray-700">
					Feedback
				</p>
				<div className="h-[2px] flex-grow bg-gray-200"></div>
				<div className="text-pink-400">
					<Twitter size={23} />
				</div>
				<span className="text-gradient text-lg">@SwiftShop</span>
			</header>
			<blockquote className="text-md px-10 text-center font-semibold italic leading-7 tracking-wide text-gray-700 md:text-xl md:leading-10 lg:px-36 lg:text-2xl lg:leading-[55px]">
				"They exhibit a high level of professionalism, and the product quality is exceptionally
				top-notch. I believe you will experience complete satisfaction with their offerings."
			</blockquote>
			<div className="flex items-center justify-center space-x-3">
				<div className="relative h-14 w-14">
					<NextImage
						src="/man-in-suit.jpg"
						fill
						className="overflow-hidden rounded-full object-cover object-top"
						alt="Man in the sit"
					/>
				</div>
				<span className="text-md font-semibold text-gray-700">Alexander Harrison</span>
			</div>
		</div>
	);
};
