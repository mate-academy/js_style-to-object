'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(';')
    .filter((style) => style.trim() !== '' && style.includes(':'))
    .forEach(function (style) {
      const parts = style.split(':');
      const key = parts[0].trim();
      const value = parts[1].trim();

      if (key && value) {
        styleObject[key] = value;
      }
    });

  return styleObject;
}

module.exports = convertToObject;
