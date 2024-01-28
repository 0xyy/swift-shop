"use client";

import { Button } from "@/app/components/atoms/Button";
import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();
	return (
		<Button disabled={formStatus.pending} size="small" type="submit" style="secondary">
			Add to cart
		</Button>
	);
};
