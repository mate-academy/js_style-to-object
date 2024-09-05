'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((element) => element)
    .reduce((structuredStyles, item) => {
      const [styleName, styleValue] = item.split(':');

      structuredStyles[styleName.trim()] = styleValue.trim();

      return structuredStyles;
    }, {});
}

module.exports = convertToObject;
