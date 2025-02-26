"use client";
import clsx from "clsx";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

export type MoveLinkProps = {
	text: string;
	size: "small" | "medium" | "large";
	href?: string;
	iconOnRight?: boolean;
	uppercase?: boolean;
};

export const MoveLink: FC<MoveLinkProps> = ({
	href,
	text,
	size,
	iconOnRight = true,
	uppercase = false,
}) => {
	const router = useRouter();
	const content = (
		<div
			className={clsx(
				"flex w-fit cursor-pointer items-center justify-center space-x-1 text-gray-700",
				{
					uppercase: uppercase,
					"text-sm": size === "small",
					"text-md": size === "medium",
					"text-lg": size === "large",
				},
			)}
		>
			{!iconOnRight && <MoveLeft size={20} />}
			<span>{text}</span>
			{iconOnRight && <MoveRight size={20} />}
		</div>
	);

	if (href) {
		return <Link href={{ pathname: href }}>{content}</Link>;
	}

	return <div onClick={() => router.back()}>{content}</div>;
};
