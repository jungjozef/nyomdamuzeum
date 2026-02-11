/* eleventy.config.cjs */
"use strict";

module.exports = function (eleventyConfig) {
  // --- Passthrough copy (static files) ---
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });

  // Optional: keep editors from accidentally breaking build by adding unknown files
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  // --- Path prefix for GitHub Pages project sites ---
  // For Cloudflare Pages later: set PATH_PREFIX="" (default)
  const pathPrefix = process.env.PATH_PREFIX || "/";

  // --- Global data (locales list for nav/switcher) ---
  eleventyConfig.addGlobalData("locales", [
    { code: "hu", label: "HU" },
    { code: "sr", label: "SR" },
    { code: "en", label: "EN" }
  ]);
  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());

  // --- Filters ---
  // Builds a URL that respects pathPrefix
  eleventyConfig.addFilter("urlWithPrefix", function (url) {
    const p = (pathPrefix || "/").replace(/\/+$/, "/"); // ensure trailing slash
    const u = (url || "/").replace(/^\/+/, ""); // remove leading slashes
    return p === "/" ? `/${u}` : `${p}${u}`;
  });

  // --- Base config ---
  return {
    pathPrefix,
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
