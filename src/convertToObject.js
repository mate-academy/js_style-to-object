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
  const array = sourceString.split(';');
  const arrayRes = array
    .map((item) => item.trim())
    .filter((item) => item !== '')
    .map((item) => item.split(':'));

  const res = {};

  for (let i = 0; i < arrayRes.length; i++) {
    res[arrayRes[i][0].trim()] = arrayRes[i][1].trim();
  }

  return res;
}

module.exports = convertToObject;
