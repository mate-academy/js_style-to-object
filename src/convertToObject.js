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
  // write your code here
  const cssObj = {};
  const objProp = sourceString.split(';')
    .map(elm => elm.trim())
    .filter(elm => elm.length !== 0)
    .map(elm => elm.split(':')
      .map(val => val.trim()));

  for (const prop of objProp) {
    cssObj[prop[0]] = prop[1];
  }

  return cssObj;
}

module.exports = convertToObject;
