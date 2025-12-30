export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig.setInputDirectory("src")
	eleventyConfig.addPassthroughCopy("src/bundle.css")

};