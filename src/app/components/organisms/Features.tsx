import { CornerDownLeft, DollarSign, Target, ThumbsUp } from "lucide-react";
import { Newsletter } from "./Newsletter";

export const Features = () => {
	return (
		<section className="bg-full-w space-y-36 bg-stone-100 py-24 shadow-[0_0_0_100vmax] shadow-stone-100 ">
			<div className="grid grid-cols-1 gap-y-7 sm:grid-cols-2 xl:flex xl:justify-between">
				<section className="flex items-center justify-center gap-x-3 p-2">
					<div className="text-pink-500">
						<DollarSign size={30} />
					</div>
					<div>
						<p className="text-gradient text-xl font-semibold">Quick Payment</p>
						<span className="text-sm font-light text-gray-700">Online quick payment</span>
					</div>
				</section>
				<section className="flex items-center justify-center gap-x-3 p-2">
					<div className="text-pink-500">
						<CornerDownLeft size={30} />
					</div>
					<div>
						<p className="text-gradient text-xl font-semibold">Easy Return</p>
						<span className="text-sm font-light text-gray-700">Return within 24 hours</span>
					</div>
				</section>
				<section className="flex items-center justify-center gap-x-3 p-2">
					<div className="text-pink-400">
						<ThumbsUp size={30} />
					</div>
					<div>
						<p className="text-gradient text-xl font-semibold">Satisfy Guarantee</p>
						<span className="text-sm font-light text-gray-700">100% satisfied guarantee</span>
					</div>
				</section>
				<section className="flex items-center justify-center gap-x-3 p-2 xl:justify-end">
					<div className="text-pink-400">
						<Target size={30} />
					</div>
					<div>
						<p className="text-gradient text-xl font-semibold">Large Selection</p>
						<span className="text-sm font-light text-gray-700">Top quality products</span>
					</div>
				</section>
			</div>
			<Newsletter />
		</section>
	);
};
