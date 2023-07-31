'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parts = sourceString.split(';');
  const newObject = {};

  parts.forEach((part) => {
    const [key, value] = part
      .split(':')
      .map(str => str.trim());

    if (key && value) {
      newObject[key] = value;
    }
  });

  return newObject;
}

module.exports = convertToObject;
