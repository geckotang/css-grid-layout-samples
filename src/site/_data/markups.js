const fs = require("fs");
const path = require("path");
const fm = require('front-matter')

const markupsDir = './src/markups/'

const displayFiles = dir => {
  const files = fs.readdirSync(dir);
  return files;
};

module.exports = async function() {
  const markupsDirList = displayFiles(markupsDir);
  const markups = markupsDirList.map(dir => {
    const markupDir = markupsDir + dir;
    const markupFileList = displayFiles(markupDir);
    const markupFiles = markupFileList.reduce((result, name) => {
      const filePath = `${markupDir}/${name}`;
      const fileType = path.parse(filePath).ext.replace('.', '');
      const data = fs.readFileSync(path.resolve(filePath)).toString();
      if (fileType === 'md') {
        result['readme'] = fm(data);
      } else {
        result[fileType] = data;
      }
      result['slug'] = dir;
      return result
    }, {});
    return markupFiles;
  });
  return markups.sort((a, b) => b.readme.attributes.publishDate - a.readme.attributes.publishDate);
};