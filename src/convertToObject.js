/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    throw new TypeError('Input must be a string.');
  }

  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())

    .filter((declaration) => declaration.includes(':'))
    .reduce((styleObject, declaration) => {
      const [property, ...valueParts] = declaration.split(':');
      const propertyName = property.trim();
      const value = valueParts.join(':').trim();

      if (propertyName && value) {
        styleObject[propertyName] = value;
      }

      return styleObject;
    }, {});
}

module.exports = convertToObject;
