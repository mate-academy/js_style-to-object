'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const newLine = sourceString.split(';');

  newLine.forEach((line) => {
    const [key, value] = line.split(':');

    if (key.trim() && value.trim()) {
      obj[key.trim()] = value.trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
