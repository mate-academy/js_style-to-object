'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // split and remove empty lines
  const strings = sourceString
    .split(';\n')
    .map(str => str.trim())
    .filter(str => str !== '' && str !== ';');

  const keys = strings.map(str => str.split(':')[0].trim());
  const values = strings.map(str => str.split(':')[1].trim());

  const object = {};

  for (let i = 0; i < keys.length; i++) {
    object[keys[i]] = values[i];
  }

  return object;
}

module.exports = convertToObject;
