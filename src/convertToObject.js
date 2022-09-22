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
  const entries = sourceString.split(';');
  const result = {};

  for (let i = 0; i < entries.length; i++) {
    const property = entries[i].slice(0, entries[i].indexOf(':')).trim();
    const value = entries[i].slice(entries[i].indexOf(':') + 1).trim();

    if (property !== '') {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
