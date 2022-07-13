/* eslint-disable max-len */
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
  const styles = {};
  const arr = sourceString.split(';');
  const arr1 = arr.map(e => e.trim().split(':'));

  for (const prop of arr1) {
    if (prop.length === 2) {
      const key = prop[0].trim();
      const value = prop[1].trim();

      styles[key] = value;
    }
  }

  return styles;
}

module.exports = convertToObject;
