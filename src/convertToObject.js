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
  const objResult = {};

  const array = sourceString.split(';')
    .map(elem => elem.split(':'))
    .map(del => {
      return del.map(elem => {
        return elem.trim();
      });
    });

  array.filter(item => item.length === 2)
    .forEach(elem => {
      objResult[elem[0]] = elem[1];
    });

  return objResult;
}

module.exports = convertToObject;
