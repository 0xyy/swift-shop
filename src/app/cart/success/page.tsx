// http://localhost:3000/cart/success?sessionId=cs_test_a1Kj1Jux0X5vF1oxoeN7yVYOcfQhaxRqVHnqhNHPM0TBXu9YhKO79Hbwoq

import { redirect } from "next/navigation";
import React from "react";
import Stripe from "stripe";

export default async function CartSuccessPAge({
	searchParams,
}: {
	searchParams: { sessionId?: string };
}) {
	if (!searchParams.sessionId) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("No secret key for stripe!");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const session = stripe.checkout.sessions.retrieve(searchParams.sessionId);

	return <div>page</div>;
}
