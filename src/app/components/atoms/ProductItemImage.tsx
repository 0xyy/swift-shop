import NextImage from "next/image";

export const ProductItemImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="">
			<NextImage
				className="object-cotain float-left h-80 w-80"
				src={src}
				alt={alt}
				width={120}
				height={120}
			/>
		</div>
	);
};
