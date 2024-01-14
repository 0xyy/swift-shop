import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductItemImage } from "@/app/components/atoms/ProductItemImage";
import { SuggestedProductsList } from "@/app/components/organisms/SuggestedProducts";
import { ProductItemDetails } from "@/app/components/atoms/ProductItemDetails";
import { ProductItemCategory } from "@/app/components/atoms/ProductItemCategory";
import { MoveLink } from "@/app/components/atoms/MoveLink";
import { Loader } from "@/app/components/atoms/Loader";
import { addToCart, getOrCreateCart } from "@/api/cart";
import { cookies } from "next/headers";
import { AddToCartButton } from "./AddToCartButton";

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

	async function addToCartAction() {
		"use server";
		const cart = await getOrCreateCart();
		cookies().set("cartId", cart.id, {
			httpOnly: true,
			sameSite: "lax",
		});
		await addToCart(cart.id, params.productId);
	}

	return (
		<section className="flex flex-col space-y-10 text-gray-700">
			<MoveLink text="Go back" size="large" iconOnRight={false} />
			{product.categories?.[0] && <ProductItemCategory category={product.categories[0].name} />}
			<article className="flex h-fit flex-col items-center space-y-5 rounded-xl border-2 border-gray-100 p-2 shadow-sm md:flex-row md:space-y-0 md:p-4">
				{product.images[0] && (
					<ProductItemImage
						src={product.images[0].url}
						alt={product.name}
						className="h-[300px] w-full md:h-[500px] xl:w-1/2"
					/>
				)}
				<div className="flex w-full flex-col justify-between p-3 md:h-[500px] xl:w-1/2">
					<ProductItemDetails product={product} />
					<form action={addToCartAction} className="mt-5">
						<AddToCartButton />
					</form>
				</div>
			</article>
			<aside className="flex flex-col space-y-10">
				<h2 className="text-center text-2xl font-semibold sm:text-left md:text-4xl">
					Suggested products
				</h2>
				<div>
					<Suspense fallback={<Loader />}>
						<SuggestedProductsList />
					</Suspense>
				</div>
			</aside>
		</section>
	);
}
