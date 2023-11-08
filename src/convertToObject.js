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
  const arr = sourceString.split(';').map(el => el.trim())
    .filter(element => element.length > 0);
  const array = arr.map(el => el.split(':'));
  const array1 = array.map(el => el.map(x => x.trim()));
  const object = {};

  // array1.forEach(el => object[el[0]] = el[1]);
  for (const el of array1) {
    object[el[0]] = el[1];
  }

  return object;
}

module.exports = convertToObject;
