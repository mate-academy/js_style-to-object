'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl && decl.includes(':'))
    .reduce((styleObject, decl) => {
      const [key, ...valueParts] = decl.split(':');
      const property = key.trim();
      const value = valueParts.join(':').trim();

      if (property && value) {
        styleObject[property] = value;
      }

      return styleObject;
    }, {});
}

module.exports = convertToObject;
