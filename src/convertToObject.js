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
  const cssArr = sourceString.replace(/\n/g, '').split(';');
  const cssObj = {};

  for (let i = 0; i < cssArr.length; i++) {
    const key = cssArr[i].split(':')[0];
    const value = cssArr[i].split(':')[1];

    if (key.trim().length > 0) {
      cssObj[key.trim()] = value.trim();
    }
  }

  return cssObj;
}

module.exports = convertToObject;
