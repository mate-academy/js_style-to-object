'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(elem => elem.split(':'))
    .reduce((result, elem) => {
      if (elem[0] !== undefined && elem[1] !== undefined) {
        result[elem[0].trim()] = elem[1].trim();
      }

      return result;
    }, {});
}

module.exports = convertToObject;
