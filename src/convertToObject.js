'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.includes(':'))
    .reduce((parsedStyles, declaration) => {
      const [keyPart, ...valueParts] = declaration.split(':');

      const key = keyPart.trim();
      const value = valueParts.join(':').trim();

      if (key) {
        parsedStyles[key] = value;
      }

      return parsedStyles;
    }, {});
}

module.exports = convertToObject;
