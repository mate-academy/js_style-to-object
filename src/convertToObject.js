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
  const obj = {};
  const arr = sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el.length !== 0);

  arr.forEach(element => {
    const index = element.split('').findIndex(el => el === ':');
    const key = element.slice(0, index).trim();
    const value = element.slice(index + 1).trim();

    obj[key] = value;
  });

  return obj;
}

module.exports = convertToObject;
