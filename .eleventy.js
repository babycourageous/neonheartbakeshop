module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");

  return {
    dir: {
      input: "./",
      output: "./_site"
    },
    htmlTemplateEngine: "njk"
  };
};
