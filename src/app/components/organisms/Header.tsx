import { MoveRight } from "lucide-react";
import NextImage from "next/image";
import { Button } from "../atoms/Button";

export const Header = () => {
	return (
		<header className="flex flex-col gap-y-10 sm:flex-row sm:gap-x-4">
			<section className="flex flex-col gap-y-8 sm:w-3/5 sm:justify-between lg:w-1/2">
				<h1 className="text-gradient text-center text-6xl font-bold uppercase tracking-wider sm:text-left sm:text-6xl md:text-7xl lg:text-left lg:text-8xl">
					Perfect time to shop
				</h1>
				<Button type="button" size="lg" style="primary" className="lg:w-fit" fullWidth>
					Shop Collection <MoveRight size={20} />
				</Button>

				<div className="flex w-min whitespace-nowrap py-2">
					<div className="flex-grow border-r-2 border-gray-200 pr-10 ">
						<p className="text-gradient text-3xl font-semibold md:text-4xl lg:text-5xl">10K</p>
						<span className="text-gradient capitalize">Happy customers</span>
					</div>
					<div className="flex-grow pl-10">
						<p className="text-gradient text-3xl font-semibold md:text-4xl lg:text-5xl">400+</p>
						<span className="text-gradient capitalize">Product items</span>
					</div>
				</div>

				<aside className="flex flex-col rounded-2xl border-2 border-gray-500 p-3">
					<div className="mb-2 grid grid-cols-2 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
						<div className="relative h-40 w-full rounded-xl md:h-24">
							<NextImage
								src="/bag-product.jpg"
								fill
								alt="couple"
								className="overflow-hidden rounded-md object-cover"
							/>
						</div>
						<div className="relative h-40 w-full rounded-xl md:h-24">
							<NextImage
								src="/cap-product.jpg"
								fill
								alt="couple"
								className="overflow-hidden rounded-md object-cover"
							/>
						</div>
						<div className="relative h-40 w-full rounded-xl md:h-24">
							<NextImage
								src="/tshirt-product.jpg"
								fill
								alt="couple"
								className="overflow-hidden rounded-md object-cover"
							/>
						</div>
						<div className="relative h-40 w-full rounded-xl md:h-24">
							<NextImage
								src="/watch-product.jpg"
								fill
								alt="couple"
								className="overflow-hidden rounded-md object-cover"
							/>
						</div>
					</div>
					<p className="text-gradient text-2xl font-semibold md:text-3xl">30% OFF</p>
					<span className="text-gradient text-sm uppercase">All products</span>
				</aside>
			</section>

			<aside className="flex flex-col items-center gap-y-6 sm:w-2/5 lg:w-1/2 lg:justify-between">
				<div className="relative h-[450px] w-full lg:h-[600px] ">
					<NextImage
						src="/header-couple.jpg"
						fill
						className="overflow-hidden rounded-2xl object-cover"
						alt="couple"
					/>
				</div>

				<h3 className="mt-4 flex items-center justify-center space-x-5 text-4xl text-gray-700 md:justify-start lg:text-6xl">
					<span className="uppercase">Trending</span> <MoveRight size={40} />
				</h3>
			</aside>
		</header>
	);
};
