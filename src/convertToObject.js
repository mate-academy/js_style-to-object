'use strict';

/**

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssStyleList = sourceString
    .split(';')
    .filter(style =>  style.includes(':') && style.length > 1);

  return cssStyleList.reduce((cssStylesObj, style) => {
    const [key, value] = style.split(':');

    cssStylesObj[key.trim()] = value.trim();

    return cssStylesObj;
  }, {});
}

module.exports = convertToObject;
