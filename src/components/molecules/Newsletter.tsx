import { MoveRight } from "lucide-react";
import { Button } from "../atoms/Button";

export const Newsletter = () => {
	return (
		<div className="flex flex-col items-center justify-center space-y-10">
			<h3 className="text-center text-2xl font-medium text-gray-700 md:text-3xl xl:text-4xl">
				Stay in the Loop and Subscribe to Our Newsletter!
			</h3>
			<div className="flex w-11/12 flex-col space-x-0 space-y-5 border-b-2 border-gray-700 py-3 sm:flex-row sm:space-x-3 sm:space-y-0 md:w-2/3 lg:w-1/2">
				<input
					type="text"
					placeholder="Enter your e-mail"
					className="h-12 flex-grow rounded-lg bg-transparent px-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-500 sm:h-auto"
				/>
				<Button type="button" size="small" style="primary" className="sm:w-fit" isFullWidth>
					Subscribe Now <MoveRight size={20} />
				</Button>
			</div>
		</div>
	);
};
