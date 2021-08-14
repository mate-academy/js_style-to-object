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
  const styleArray = sourceString
    .split(';')
    .map(item => item.split(':'))
    .filter(item => item.length > 1);

  const stylesObject = {};

  styleArray.forEach((element) => {
    stylesObject[element[0].trim()] = element[1].trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
