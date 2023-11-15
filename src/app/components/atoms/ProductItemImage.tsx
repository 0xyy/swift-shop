import NextImage from "next/image";

export const ProductItemImage = ({
	src,
	alt,
	fill,
	className,
}: {
	src: string;
	alt: string;
	fill?: boolean;
	className?: string;
}) => {
	const size = fill ? "w-full h-full" : "h-60 w-1/3 md:h-72 md:w-1/2";
	return (
		<div
			className={`${
				className ? "" : size
			} relative flex items-center justify-center rounded-xl ${className}`}
		>
			<NextImage className="overflow-hidden object-contain" src={src} alt={alt} fill />
		</div>
	);
};
