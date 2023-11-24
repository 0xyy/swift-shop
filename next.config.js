/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		domains: ["media.graphassets.com"],
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);

// redirects: async () => {
// 	return [
// 		{
// 			source: "/products/t-shirts",
// 			destination: "/products/t-shirts/1",
// 			permanent: false,
// 		},
// 	];
// },
