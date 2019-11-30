const markdownIt = require('markdown-it');
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

module.exports = function(config) {

  config.addFilter('markdown', function(value) {
    const md = markdownIt(markdownItOptions);
    return md.render(value);
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