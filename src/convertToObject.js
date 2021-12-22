'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStylesArray = sourceString.split(';');
  const cssStylesObj = {};

  cssStylesArray.forEach(item => {
    const style = item.split(':');

    if (style[0] && style[1]) {
      cssStylesObj[style[0].trim()] = style[1].trim();
    }
  });

  return cssStylesObj;
}

module.exports = convertToObject;
