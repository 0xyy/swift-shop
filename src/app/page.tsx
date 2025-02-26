import { Header } from "@/components/organisms/Header";
import { Feedback } from "@/components/organisms/Feedback";
import { Features } from "@/components/organisms/Features";
import { Models } from "@/components/organisms/Models";
import { TrendingProducts } from "@/components/organisms/TrendingProducts";

export default async function HomePage() {
	return (
		<section className="flex flex-col gap-y-16 md:gap-y-32">
			<Header />
			<TrendingProducts />
			<Feedback />
			<Models />
			<Features />
		</section>
	);
}
