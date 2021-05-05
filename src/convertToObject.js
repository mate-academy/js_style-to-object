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
  const sourceObj = {};
  const sourceArr = sourceString.split(';')
    .map(v => v.split(':'))
    .map(v => v.map(x => x.trim()))
    .filter(x => x.length === 2);

  for (const prop of sourceArr) {
    sourceObj[prop[0]] = prop[1];
  }

  return sourceObj;
}

module.exports = convertToObject;
