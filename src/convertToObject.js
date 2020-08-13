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
  const resObj = {};
  const arr = sourceString
    .split(';')
    .map(elem => elem.split(':'))
    .map(elem => elem.map(a => a.trim()))
    .filter(elem => elem[0] !== '');

  for (const [key, value] of arr) {
    resObj[key] = value;
  }

  return resObj;
}

module.exports = convertToObject;
