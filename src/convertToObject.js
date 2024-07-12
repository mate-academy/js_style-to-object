'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style !== '')
    .reduce((styles, style) => {
      const [key, value] = style.split(':').map((item) => item.trim());

      if (key && value) {
        styles[key] = value;
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
