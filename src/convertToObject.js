'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleObject = sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl.includes(':'))
    .reduce((accumulator, decl) => {
      const [property, ...valueParts] = decl.split(':');
      const key = property.trim();
      const value = valueParts.join(':').trim();

      if (key && value) {
        accumulator[key] = value;
      }

      return accumulator;
    }, {});

  return styleObject;
}

module.exports = convertToObject;
