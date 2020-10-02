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
  const objectFromString = {};

  sourceString
    .split(';')
    .map(stringPart => stringPart.split(':'))
    .filter(stringPart => stringPart.length > 1)
    .forEach(stringPart => {
      objectFromString[stringPart[0].trim()] = stringPart[1].trim();
    });

  return objectFromString;
}

module.exports = convertToObject;
