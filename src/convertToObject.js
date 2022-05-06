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
  const arrOfSourceString = sourceString.split(';');
  const convertString = {};

  for (const el of arrOfSourceString) {
    const arrOfElement = el.split(':');

    if (arrOfElement[0] && arrOfElement[1]) {
      convertString[arrOfElement[0].trim()] = arrOfElement[1].trim();
    }
  }

  return convertString;
}

module.exports = convertToObject;
