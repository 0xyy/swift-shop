import NextImage from "next/image";
import { Subtitle } from "../atoms/Subtitle";
import { Instagram } from "lucide-react";

export const Models = () => {
	return (
		<div className="flex flex-col space-y-10 py-7">
			<Subtitle title="Instagram" text="@swift.shop" icon={<Instagram size={23} />} />
			<div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 px-12 md:grid-cols-2 md:gap-x-8 md:px-0 xl:grid-cols-4">
				<div className="relative h-96">
					<NextImage
						src="/model-1.jpg"
						fill
						className="overflow-hidden rounded-2xl object-cover"
						alt="Model 1"
					/>
				</div>
				<div className="relative h-96">
					<NextImage
						src="/model-2.jpg"
						fill
						className="overflow-hidden rounded-2xl object-cover"
						alt="Model 2"
					/>
				</div>
				<div className="relative h-96">
					<NextImage
						src="/model-3.jpg"
						fill
						className="overflow-hidden rounded-2xl object-cover"
						alt="Model 3"
					/>
				</div>
				<div className="relative h-96">
					<NextImage
						src="/model-4.jpg"
						fill
						className="overflow-hidden rounded-2xl object-cover"
						alt="Model 4"
					/>
				</div>
			</div>
		</div>
	);
};
