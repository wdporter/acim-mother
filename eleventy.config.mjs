import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import markdownItAttrs  from "markdown-it-attrs";

export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig.setInputDirectory("src")
	eleventyConfig.setServerOptions({
		port: 8090
	})
	eleventyConfig.addPlugin(eleventyNavigationPlugin)
	eleventyConfig.addPassthroughCopy("src/assets")
	
	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAttrs));

};