'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an example
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};
  const keyValueStrings = sourceString.trim(/\s+/).split(';');

  keyValueStrings.forEach(element => {
    const keyvalue = element.split(':');
    const key = keyvalue[0];
    const value = keyvalue[1];

    if (keyvalue[0] && keyvalue[1]) {
      cssProperties[key.trim()] = value.trim();
    }
  });

  return cssProperties;
}

module.exports = convertToObject;
