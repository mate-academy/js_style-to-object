'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const arrayofStings = sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item.length > 0);

  const result = {};

  arrayofStings.forEach(line => {
    const key = line.split(':')[0].trim();
    const value = line.split(':')[1].trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
