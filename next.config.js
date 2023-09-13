/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media-cdn.incrowdsports.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "img.youtube.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
		  rule.test?.test?.(".svg"),
		)

		config.module.rules.push(
		  // Reapply the existing rule, but only for svg imports ending in ?url
		  {
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
		  },
		  // Convert all other *.svg imports to React components
		  {
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ }, // exclude if *.svg?url
				use: ["@svgr/webpack"],
		  },
		)

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i

		return config
	  },
	// output: 'export',
}

module.exports = nextConfig
