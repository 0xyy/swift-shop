import { ProductItemList } from "./components/organisms/ProductItemList";
import { type Product } from "./components/types";

const products: Product[] = [
	{
		id: "1",
		name: "Iphone 12",
		price: 1200,
		coverImage: {
			src: "/iphone_12.png",
			alt: "Iphone 12",
		},
	},
	{
		id: "2",
		name: "Samsung Galaxy S21",
		price: 1100,
		coverImage: {
			src: "/samsung.png",
			alt: "Samsung Galaxy S21",
		},
	},
	{
		id: "3",
		name: "Vivo X60 Pro",
		price: 900,
		coverImage: {
			src: "/vivo.png",
			alt: "Vivo X60 Pro",
		},
	},
	{
		id: "4",
		name: "Oppo Reno 5 Pro",
		price: 850,
		coverImage: {
			src: "/oppo.png",
			alt: "Oppo Reno 5 Pro",
		},
	},
];

export default function Home() {
	return (
		<section className="flex justify-around align-middle">
			<ProductItemList products={products} />
		</section>
	);
}
