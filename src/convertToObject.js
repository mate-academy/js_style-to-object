'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedString = sourceString
    .split(';')
    .map(str => str.split(':'))
    .filter(str => str.length === 2);

  const stylesInObject = {};

  splitedString.map(str => {
    const prop = str[0].trim();
    const value = str[1].trim();

    stylesInObject[prop] = value;
  });

  return stylesInObject;
}

module.exports = convertToObject;
