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
  const styleObj = {};
  const arrStyles = sourceString
    .split(';')
    .map((str) => str.trim())
    .filter(v => v);

  for (const str of arrStyles) {
    const arrStr = str.split(':');

    styleObj[arrStr[0].trim()] = arrStr[1].trim();
  }

  return styleObj;
}

module.exports = convertToObject;
