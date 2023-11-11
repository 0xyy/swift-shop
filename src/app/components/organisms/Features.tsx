import { CornerDownLeft, DollarSign, MoveRight, Target, ThumbsUp } from "lucide-react";
import { Button } from "../atoms/Button";

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
			<div className="flex flex-col items-center justify-center space-y-10">
				<h3 className="text-center text-2xl font-medium text-gray-700 md:text-3xl xl:text-4xl">
					Stay in the Loop and Subscribe to Our Newsletter!
				</h3>
				<div className="flex w-11/12 space-x-3 border-b-2 border-gray-700 py-3 md:w-2/3 lg:w-1/2">
					<input
						type="text"
						placeholder="Enter your e-mail"
						className="flex-grow rounded-lg bg-transparent px-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500"
					/>
					<Button type="button" size="sm" style="primary" className="px-4 md:px-10">
						Subscribe Now <MoveRight size={20} />
					</Button>
				</div>
			</div>
		</section>
	);
};
