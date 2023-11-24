import { Newsletter } from "../molecules/Newsletter";
import { FeatureItem, type FeatureItemProps } from "../molecules/FeatureItem";

const features: FeatureItemProps[] = [
	{
		title: "Quick Payment",
		description: "Online quick payment",
		type: "payment",
	},
	{
		title: "Easy Return",
		description: "Return within 24 hours",
		type: "return",
	},
	{
		title: "Satisfy Guarantee",
		description: "100% satisfied guarantee",
		type: "satisfy",
	},
	{
		title: "Large Selection",
		description: "Top quality products",
		type: "quality",
	},
];

export const Features = () => {
	return (
		<section className="bg-full-w space-y-36 bg-stone-100 py-24 shadow-[0_0_0_100vmax] shadow-stone-100 ">
			<div className="grid grid-cols-1 gap-y-7 sm:grid-cols-2 xl:flex xl:justify-between">
				{features.map((feature) => (
					<FeatureItem key={feature.title} {...feature} />
				))}
			</div>
			<Newsletter />
		</section>
	);
};
