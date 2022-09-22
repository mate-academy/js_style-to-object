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
  const modifiedString = sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el !== '')
    .map(el => el.split(':'))
    .reduce((accumulator, currentElement) => ({
      ...accumulator,
      [currentElement[0].trim()]: currentElement[1].trim(),
    }), {});

  return modifiedString;
}

module.exports = convertToObject;
