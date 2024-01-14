import clsx from "clsx";
import NextImage from "next/image";

export const ProductItemImage = ({
	src,
	alt,
	className,
}: {
	src: string;
	alt: string;
	className: string;
}) => {
	return (
		<div className={clsx("relative flex items-center justify-center rounded-xl", className)}>
			<NextImage
				className="overflow-hidden object-contain"
				src={src}
				alt={alt}
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
		</div>
	);
};
