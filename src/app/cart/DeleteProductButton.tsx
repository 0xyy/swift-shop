"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { deleteItem } from "./actions";

export const DeleteProductButton = ({ itemId }: { itemId: string }) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	return (
		<button
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await deleteItem(itemId);
					router.refresh();
				});
			}}
		>
			<Trash2 size={20} className="text-red-700" />
		</button>
	);
};
