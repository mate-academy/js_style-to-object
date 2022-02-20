'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values
 *  of related CSS properties (see an exampl
 *  in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const mas = sourceString.split(';');

  for (let i = 0; i < mas.length; i++) {
    const masFromTwoElem = mas[i].split(':');

    if (masFromTwoElem.length === 2) {
      obj[masFromTwoElem[0].trim()] = masFromTwoElem[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
