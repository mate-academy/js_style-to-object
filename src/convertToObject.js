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
  const resArr = sourceString.split(';')
    .map(prop => prop.split(':'))
    .map(arrElem => arrElem.map(str => str.trim()))
    .filter(elem => elem.length > 1);
  const res = {};

  for (const key in resArr) {
    res[resArr[key][0]] = resArr[key][1];
  }

  return res;
}

module.exports = convertToObject;
