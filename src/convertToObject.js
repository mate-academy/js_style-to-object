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
    .filter((style) => style.length > 0)
    .reduce((stylesMap, style) => {
      const [property, value] = style.split(':');

      stylesMap[property.trim()] = value.trim();

      return stylesMap;
    }, {});
}

module.exports = convertToObject;
