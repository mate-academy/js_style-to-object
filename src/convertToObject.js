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
  const newString = sourceString
    .split(';')
    .join(',')
    .split(':')
    .join(',')
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean);

  const obj = newString.reduce((acc, item, index, arr) => {
    if (index % 2 === 0) {
      acc[item] = arr[index + 1];
    }

    return acc;
  }, {});

  return obj;
}

module.exports = convertToObject;
