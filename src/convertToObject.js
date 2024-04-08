'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const result = sourceString
    .trim()
    .split(';')
    .filter((style) => style.trim())
    .reduce((acc, style) => {
      const [styleName, styleValue] = style.split(':');

      acc[styleName.trim()] = styleValue.trim();

      return acc;
    }, {});

  return result;
}

module.exports = convertToObject;
