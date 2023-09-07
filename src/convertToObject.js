'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const source = sourceString.split(';');
  const result = {};
  let key = '';
  let value = '';
  let startKeyIndex = 0;
  let endKeyIndex = 0;

  for (let prop = 0; prop < source.length; prop++) {
    startKeyIndex = source[prop].lastIndexOf('\n ') + 1;
    endKeyIndex = source[prop].indexOf(':');
    key = source[prop].slice(startKeyIndex, (endKeyIndex)).trim();
    value = source[prop].slice(endKeyIndex + 1).trim();

    if (key && value) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
