import { CornerDownLeft, DollarSign, Target, ThumbsUp } from "lucide-react";
import { FC } from "react";

const iconMap = {
	payment: DollarSign,
	return: CornerDownLeft,
	satisfy: ThumbsUp,
	quality: Target,
};

export type FeatureItemProps = {
	title: string;
	description: string;
	type: "payment" | "return" | "satisfy" | "quality";
};

export const FeatureItem: FC<FeatureItemProps> = ({ title, description, type }) => {
	const Icon = iconMap[type];

	return (
		<section className="flex items-center justify-center gap-x-3 p-2">
			<div className="text-pink-500">
				<Icon size={30} />
			</div>
			<div>
				<p className="text-gradient text-xl font-semibold">{title}</p>
				<span className="text-sm font-light text-gray-700">{description}</span>
			</div>
		</section>
	);
};
