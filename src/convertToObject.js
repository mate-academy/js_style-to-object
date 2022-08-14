'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let stringSplited = sourceString.split(';');

  stringSplited = stringSplited
    .map(a => a.split(':')
    .map(b => b.trim()));

  const ccsStyles = {};

  stringSplited.map(a => {
    ccsStyles[a[0]] = a[1];
  });

  delete ccsStyles[''];

  return ccsStyles;
}

module.exports = convertToObject;
