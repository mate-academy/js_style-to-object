'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  let array = sourceString.split(';');

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i]
      .split(':')
      .map(element => element.trim());
  }

  array = array
    .filter(element => element.length > 1)
    .sort((a, b) => a[0].localeCompare(b[0]));

  array.forEach(element => {
    const KEY = element[0];
    const VALUE = element[1];

    result[KEY] = VALUE;
  });

  return result;
}

module.exports = convertToObject;
