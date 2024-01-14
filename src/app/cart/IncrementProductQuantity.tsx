"use client";
import { useCallback, useEffect, useOptimistic, useState } from "react";
import { changeItemQuantity } from "./actions";

export const IncrementProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	// const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
	// 	quantity,
	// 	(_state, newQuantity: number) => newQuantity,
	// );
	// const [optimisticQuantity, setOptimisticQuantity] = useState(quantity);
	// const [reallyQuantity, setReallyQuantity] = useState(quantity);

	// const setOrderItemQuantity = useCallback(async () => {
	// 	switch (true) {
	// 		case reallyQuantity === 0:
	// 			console.log("optimistic quantity is 0 and product was deleted");
	// 			// await deleteOrderItem(itemId);
	// 			break;
	// 		case reallyQuantity > 0:
	// 			console.log("really quantity is greater than 0 and product was changed");
	// 			await changeItemQuantity(itemId, reallyQuantity);
	// 			break;
	// 		default:
	// 			console.log("really quantity is not set and product was not changed");
	// 			break;
	// 	}
	// }, [itemId, reallyQuantity, changeItemQuantity]);

	// useEffect(() => {
	// 	const delayTimeout = setTimeout(() => {
	// 		setReallyQuantity(optimisticQuantity);
	// 	}, 400);
	// 	return () => {
	// 		clearTimeout(delayTimeout);
	// 	};
	// }, [optimisticQuantity]);

	// useEffect(() => {
	// 	if (reallyQuantity !== quantity) {
	// 		setOrderItemQuantity().then(() => {
	// 			console.log("done", reallyQuantity);
	// 		});
	// 	}
	// }, [reallyQuantity]);

	return (
		<>
			<span className="text-md font-semibold">{quantity}</span>
			<button
				data-testid="increment"
				className="h-7 w-7 rounded-lg bg-gray-700 text-white shadow-md transition-colors hover:bg-gray-600"
				type="submit"
				formAction={async () => {
					// setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, quantity + 1);
				}}
			>
				+
			</button>

			{/* <button
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
				className="h-7 w-7 rounded-lg bg-gray-700 text-white shadow-md transition-colors hover:bg-gray-600"
			>
				+ */}
			{/* </button> */}
		</>
	);
};
