import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductItemDescription } from "@/app/components/atoms/ProductItemDescription";
import { ProductItemImage } from "@/app/components/atoms/ProductItemImage";
import { SuggestedProductsList } from "@/app/components/organisms/SuggestedProducts";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `Product ${product.name}`,
		description: product.description,
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="max-w-xs">
				<h1>{product.name}</h1>
				{product.images[0] && <ProductItemImage src={product.images[0].url} alt={product.name} />}
				<ProductItemDescription product={product} />
			</article>
			<aside>
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
