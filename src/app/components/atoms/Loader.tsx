"use client";
import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
	return (
		<ThreeDots
			height="60"
			width="60"
			radius="9"
			color="#374151"
			wrapperClass="flex items-center justify-center"
			ariaLabel="three-dots-loading"
			wrapperStyle={{}}
			visible={true}
		/>
	);
};
