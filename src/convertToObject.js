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
  const splitString = sourceString.split(';');
  const arr = [];
  const obj = {};

  for (let i = 0; i < splitString.length; i++) {
    const trimmed = splitString[i].trim();

    if (trimmed) {
      arr.push(trimmed);
    }
  }

  for (const style of arr) {
    const index = style.indexOf(':');

    if (index !== -1) {
      const key = style.slice(0, index).trim();
      const value = style.slice(index + 1).trim();

      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
