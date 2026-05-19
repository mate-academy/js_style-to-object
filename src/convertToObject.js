'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesStr) {
  if (!stylesStr || stylesStr.trim() === '') {
    return {};
  }

  return stylesStr
    .split(';')
    .map(style => style.trim())
    .filter(style => style.length > 0)
    .reduce((stylesObj, currentStyle) => {
      const [key, value] = currentStyle.split(':');

      stylesObj[key.trim()] = value.trim();

      return stylesObj;
    }, {});
}

module.exports = convertToObject;
