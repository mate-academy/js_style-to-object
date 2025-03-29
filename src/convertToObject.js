'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((complexStyles, string) => {
    const [property, value] = string.split(':');

    if (!property.trim() || !value.trim()) {
      return complexStyles;
    }

    complexStyles[property.trim()] = value.trim();

    return complexStyles;
  }, {});
}

module.exports = convertToObject;
