'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  const modifiedString = sourceString
    .replace(/[\n]*/g, '')
    .split(';')
    .map(el => el.trim())
    .filter(el => el !== '');

  for (let i = 0; i < modifiedString.length; i++) {
    const singleStyle = modifiedString[i].split(':');
    const key = singleStyle[0].trim();
    const value = singleStyle[1].trim();

    cssObject[key] = value;
  }

  return cssObject;
}

module.exports = convertToObject;
