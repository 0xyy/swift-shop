import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export type MoveLinkProps = {
	href: string;
	text: string;
	size: "xl" | "lg" | "md" | "sm";
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
	return (
		<Link href={{ pathname: href }}>
			<div
				className={`flex w-fit items-center justify-center space-x-1 text-gray-700 text-${size} ${
					uppercase ? "uppercase" : ""
				}`}
			>
				{!iconOnRight && <MoveLeft size={20} />}
				<span>{text}</span>
				{iconOnRight && <MoveRight size={20} />}
			</div>
		</Link>
	);
};
