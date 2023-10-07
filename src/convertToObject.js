'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedSource = sourceString.split(';').map(prop => prop.split(':'));
  const styles = {};

  for (let [ key, value ] of splittedSource) {
    if (value) {
      key = key.trim();
      value = value.trim();
      styles[key] = value;
    }
  }

  return styles;
}

module.exports = convertToObject;
