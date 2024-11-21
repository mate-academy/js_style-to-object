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
    .filter((style) => style.includes(':'))
    .reduce((acc, declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((item) => item.trim());

      acc[property] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
