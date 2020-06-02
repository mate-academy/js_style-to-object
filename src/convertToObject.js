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
  const resultObj = {};
  const filteredArr = sourceString.split(';')
    .map(elem => elem.split(':'))
    .map(elem => elem.map(x => x.trim()))
    .filter(x => x.length !== 1);

  for (const key of filteredArr) {
    resultObj[key[0]] = key[1];
  }

  return resultObj;
}

module.exports = convertToObject;
