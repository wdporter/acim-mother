import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import markdownItAttrs  from "markdown-it-attrs";

import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';


export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig.setInputDirectory("src")
	eleventyConfig.setServerOptions({
		port: 8090
	})
	eleventyConfig.addPlugin(eleventyNavigationPlugin)
	eleventyConfig.addPassthroughCopy("src/assets")
	eleventyConfig.addPassthroughCopy({"_temp/tailwind.css": "assets/tailwind.css"})
	eleventyConfig.addPassthroughCopy("src/robots.txt")
	
	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAttrs));

	//compile tailwind before eleventy processes the files
  eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve('./src/tailwind/tailwind.css');
    const tailwindOutputPath = './_temp/tailwind.css';
    const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');
    const outputDir = path.dirname(tailwindOutputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const result = await processor.process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });
    fs.writeFileSync(tailwindOutputPath, result.css);
  })

  const processor = postcss([
    //compile tailwind
    tailwindcss(),
  ]);
	
	
	
};