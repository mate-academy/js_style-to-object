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
function splitKey(string) {
  return string.split(':')[0].trim();
}

function splitValue(string) {
  return string.split(':')[1].trim();
}

function convertToObject(sourceString) {
  const cssProperties = {};
  const splitedStr = sourceString.split(';');

  for (const string of splitedStr) {
    if (splitKey(string) && splitValue(string)) {
      cssProperties[splitKey(string)] = splitValue(string);
    }
  }

  return cssProperties;
}

module.exports = convertToObject;
