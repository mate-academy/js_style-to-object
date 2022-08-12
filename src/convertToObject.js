'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a
 * string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 *  CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  const array = sourceString

    .split(';').map(el => el.trim())
    .filter(element => element.length > 0)
    .map(element => element.split(':'))
    .map(element => element.map(word => word.trim()));

  array.forEach(([key, value]) => {
    object[key] = value;
  });

  return object;
}

module.exports = convertToObject;
