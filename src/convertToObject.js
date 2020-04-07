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
  return sourceString.split(',')
    .map(elem => elem.split(':'))
    .reduce((result, elem) => {
      if (elem[0] !== undefined && elem[1] !== undefined) {
        result[elem[0].trim()] = elem[1].trim();
      }

      return result;
    }, {});
}

module.exports = convertToObject;
