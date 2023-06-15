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
  const properties = sourceString.split(';')
    .map(string => string.trim())
    .filter(string => string.length !== 0);

  const styles = {};

  for (const property of properties) {
    const keyAndValue = property.split(':');
    const key = keyAndValue[0];
    const value = keyAndValue[1];

    const clearKey = key.trim();
    const clearValue = value.trim();

    styles[clearKey] = clearValue;
  }

  return styles;
}

module.exports = convertToObject;
