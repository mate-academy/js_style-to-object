'use strict';

/**
 * @param {string} stylesString
 * @returns {Object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split('\n')
    .map(decl => decl.trim())
    .filter(decl => decl.includes(':'))
    .reduce((acc, decl) => {
      const [property, ...valueParts] = decl.split(':');
      acc[property.trim()] = valueParts.join(':').trim();
      return acc;
    }, {});
}

module.exports = convertToObject;
