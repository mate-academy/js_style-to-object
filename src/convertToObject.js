'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

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
