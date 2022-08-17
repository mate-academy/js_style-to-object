'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *   in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 *   in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObject = {};

  const sourceArr = sourceString
    .replace(/\n/g, '')
    .replace(/ +/, '')
    .replace(/  +/g, '')
    .split(';')
    .filter(a => a.length > 0)
    .map(a => a.split(':'));

  for (const i of sourceArr) {
    i[1] = i[1].replace(/ +/, '');
    sourceObject[i[0]] = i[1];
  }

  return sourceObject;
}

module.exports = convertToObject;
