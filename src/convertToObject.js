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
  const objFromStr = {};

  sourceString
    .split(';')
    .map(strPart => strPart.split(':'))
    .filter(strPart => strPart.length > 1)
    .forEach(strPart => {
      objFromStr[strPart[0].trim()] = strPart[1].trim();
    });

  return objFromStr;
}

module.exports = convertToObject;
