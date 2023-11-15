import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductItemImage } from "@/app/components/atoms/ProductItemImage";
import { SuggestedProductsList } from "@/app/components/organisms/SuggestedProducts";
import { ProductItemDetails } from "@/app/components/atoms/ProductItemDetails";
import { ProductItemCategory } from "@/app/components/atoms/ProductItemCategory";
import { MoveLink } from "@/app/components/atoms/MoveLink";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name} - SwiftShop`,
		description: product.description,
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<section className="flex flex-col space-y-10 text-gray-700">
			{/* <Link href="/products">
				<div className="flex">
					<MoveLeft /> <span>Go back to all products</span>
				</div>
			</Link> */}
			<MoveLink href="/products" size="sm" text="Go back" iconOnRight={false} />
			{product.categories?.[0] && <ProductItemCategory category={product.categories[0].name} />}
			<article className="flex h-[500px] flex-col space-y-3 rounded-xl border-2 border-gray-100 p-2 md:flex-row md:p-4">
				<div className="h-full w-full lg:w-1/2">
					{product.images[0] && (
						<ProductItemImage src={product.images[0].url} alt={product.name} fill />
					)}
				</div>
				<ProductItemDetails product={product} />
			</article>
			<aside className="flex flex-col space-y-10">
				<h2 className="text-center text-2xl font-semibold sm:text-left md:text-4xl">
					Suggested products
				</h2>
				<div>
					<Suspense fallback={<p>loading</p>}>
						<SuggestedProductsList />
					</Suspense>
				</div>
			</aside>
		</section>
	);
}
