import Image from "next/image";

export const ProductItemImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="flex justify-center align-middle">
			<Image src={src} alt={alt} width={150} height={150} />
		</div>
	);
};
