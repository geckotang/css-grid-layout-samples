const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require('markdown-it');
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

module.exports = function(config) {

  config.addPlugin(pluginRss);

  config.addFilter('markdown', function(value) {
    const md = markdownIt(markdownItOptions);
    return md.render(value);
  });

  config.addFilter('atomDate', function(value) {
    return ( new Date(value) ).toUTCString();
  });

  return {
    dir: {
      input: 'src/site',
      includes: '_includes',
      layouts: '_layouts',
      output: 'dist',
    }
  };

};