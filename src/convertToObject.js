'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const fixedArr = sourceString.split(';')
    .map(element => element.split(':')
      .map(value => value.trim()))
    .filter(el => el.length > 1);

  const stylesObj = Object.fromEntries(fixedArr);

  return stylesObj;
}

module.exports = convertToObject;
