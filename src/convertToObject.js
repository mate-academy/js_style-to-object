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
  const arr = sourceString.split(';')
    .map(el => el.trim())
    .filter(el => el !== '');

  const result = {};

  arr.forEach(item => {
    const el = item.split(':');
    const key = el[0].trim();
    const value = el[1].trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
