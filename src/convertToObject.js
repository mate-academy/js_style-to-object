'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 *
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
  const properties = sourceString.split(';')
    .map(el => el.trim())
    .filter(el => el);

  for (let property of properties) {
    property = property.split(':').map(str => str.trim());
    cssObject[property[0]] = property[1];
  }

  return cssObject;
}

module.exports = convertToObject;
