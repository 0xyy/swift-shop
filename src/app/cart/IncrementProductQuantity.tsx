"use client";
import { useOptimistic, useState } from "react";
import { changeItemQuantity } from "./actions";

export const IncrementProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);
	const [isDisabled, setIsDisabled] = useState(false);

	return (
		<>
			<button
				data-testid="decrement"
				className="h-7 w-7 rounded-lg bg-gray-700 text-white shadow-md transition-colors hover:bg-gray-600 disabled:bg-gray-400"
				type="submit"
				disabled={isDisabled}
				formAction={async () => {
					setIsDisabled(true);
					setTimeout(async () => {
						setIsDisabled(false);
						setOptimisticQuantity(optimisticQuantity - 1);
						await changeItemQuantity(itemId, optimisticQuantity - 1);
					}, 500);
				}}
			>
				-
			</button>
			<span className="text-md font-semibold">{optimisticQuantity}</span>
			<button
				data-testid="increment"
				className="h-7 w-7 rounded-lg bg-gray-700 text-white shadow-md transition-colors hover:bg-gray-600 disabled:bg-gray-400"
				type="submit"
				disabled={isDisabled}
				formAction={async () => {
					setIsDisabled(true);
					setTimeout(async () => {
						setIsDisabled(false);
						setOptimisticQuantity(optimisticQuantity + 1);
						await changeItemQuantity(itemId, optimisticQuantity + 1);
					}, 500);
				}}
			>
				+
			</button>
		</>
	);
};
