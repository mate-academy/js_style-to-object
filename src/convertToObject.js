'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};

  sourceString.split(';')
    .map(a => a.split(':'))
    .forEach(a => {
      if (a.length === 2) {
        newObject[a[0].trim()] = a[1].trim();
      }
    });

  return newObject;
}

module.exports = convertToObject;
