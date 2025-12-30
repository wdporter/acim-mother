export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig.setInputDirectory("src")
	eleventyConfig.setServerOptions({
		port: 8090
	})
	eleventyConfig.addPassthroughCopy("src/bundle.css")


};