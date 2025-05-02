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
    .filter((style) => style)
    .reduce((accumulator, style) => {
      const [key, value] = style.split(':').map((s) => s.trim());

      if (key && value) {
        accumulator[key] = value;
      }

      return accumulator;
    }, {});
}

module.exports = convertToObject;
