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
  const peeledStyles = sourceString
    .replace(/\s+/g, ' ')
    .replace(/\s:/g, ':')
    .split(';')
    .map((prop) => prop.trim())
    .filter((prop) => prop);

  const STYLES_ARR = [];

  peeledStyles.map(prop => STYLES_ARR.push(prop.split(': ')));

  const STYLES_OBJECT = Object.fromEntries(STYLES_ARR);

  return STYLES_OBJECT;
}

module.exports = convertToObject;
