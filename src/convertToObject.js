'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStylesInArray = sourceString.split(';');
  const fixedCssStylesInArray = cssStylesInArray.filter(string =>
    string.trim().length > 0).map(string => {
    return string.split(':');
  });
  const stylesObj = {};

  fixedCssStylesInArray.forEach(([key, value]) => {
    if (value) {
      stylesObj[key.trim()] = value.trim();
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
