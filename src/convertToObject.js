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
  const cssObject = {};
  const newString = sourceString.split(';\n').filter(a => a.includes(':'));
  const objectString = newString.map(a => a.split(':').map(b => b.trim()));
  objectString.forEach(a => cssObject[a[0]] = a[1]);

  return cssObject;
}

module.exports = convertToObject;
