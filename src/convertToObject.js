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
  const stylesArray = sourceString.split(';')
    .map(item => item.trim())
    .filter(item => item !== '')
    .map(item => item.split(':'))
    .map(item => item.map(i => i.trim()));

  const stylesObject = {};

  for (let i = 0; i < stylesArray.length; i++) {
    stylesObject[stylesArray[i][0]] = stylesArray[i][1];
  }

  return stylesObject;
}

module.exports = convertToObject;
