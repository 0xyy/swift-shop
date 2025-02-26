"use client";

import { Button } from "@/components/atoms/Button";
import { ShoppingCart } from "lucide-react";
import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<Button disabled={formStatus.pending} size="small" type="submit" style="secondary">
			Add to cart
			<ShoppingCart size={18} />
		</Button>
	);
};
