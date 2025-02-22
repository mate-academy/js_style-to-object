'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.trim()) {
    return {};
  }

  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 0)
    .reduce((stylesObject, style) => {
      const [property, value] = style.split(':').map((part) => part.trim());

      if (property) {
        stylesObject[property] = value || '';
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
