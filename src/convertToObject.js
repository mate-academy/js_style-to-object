'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(Boolean)
    .reduce((acc, style) => {
      const [property, value] = style.split(':').map((s) => s.trim());

      acc[property] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
