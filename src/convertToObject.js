'use strict';

/**
 * Implement convertToObject function:
 *

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};

  sourceString.split(';')
    .filter(property => property.includes(':'))
    .forEach(property => {
      const keyValue = property.split(':');

      resultObject[keyValue[0].trim()] = keyValue[1].trim();
    });

  return resultObject;
}

module.exports = convertToObject;
