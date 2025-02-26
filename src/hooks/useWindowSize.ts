import { useEffect, useState } from "react";

const LG_BREAKPOINT = 1024;

export const useWindowSize = () => {
	const isClient = typeof window === "object";

	const [windowSize, setWindowSize] = useState({
		width: isClient ? window.innerWidth : null,
		height: isClient ? window.innerHeight : null,
	});

	useEffect(() => {
		if (!isClient) return;

		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return {
		width: windowSize.width,
		height: windowSize.height,
		isOverLg: windowSize.width && windowSize.width > LG_BREAKPOINT,
	};
};
