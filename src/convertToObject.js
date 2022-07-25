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
  const arrTotal = sourceString.split(';').filter(
    elem => elem.trim().length);
  const obj = {};

  for (const elem of arrTotal) {
    const arrKeyValue = elem.split(':');

    obj[arrKeyValue[0].trim()] = arrKeyValue[1].trim();
  }

  return obj;
}

module.exports = convertToObject;
