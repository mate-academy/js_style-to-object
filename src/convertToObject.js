'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const result = {};

  stylesString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl.includes(':'))
    .forEach((decl) => {
      const [property, ...valueParts] = decl.split(':');
      const key = property.trim();
      const value = valueParts.join(':').trim();

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
