'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.includes(':'))
    .reduce((styles, declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((part) => part.trim());

      if (property && value) {
        styles[property] = value;
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
