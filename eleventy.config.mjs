import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig.setInputDirectory("src")
	eleventyConfig.setServerOptions({
		port: 8090
	})
	eleventyConfig.addPlugin(eleventyNavigationPlugin)
	eleventyConfig.addPassthroughCopy("src/assets")

};