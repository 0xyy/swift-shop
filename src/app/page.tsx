import { Features } from "./components/organisms/Features";
import { Feedback } from "./components/organisms/Feedback";
import { Header } from "./components/organisms/Header";
import { Models } from "./components/organisms/Models";

export default function HomePage() {
	return (
		<section className="flex flex-col gap-y-24">
			<Header />
			<Feedback />
			<Models />
			<Features />
		</section>
	);
}
