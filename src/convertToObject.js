'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const keyValuePairs = sourceString.split(';');
  const cssProperties = {};

  keyValuePairs.length -= 1;

  for (let i = 0; i < keyValuePairs.length; i++) {
    keyValuePairs[i] = keyValuePairs[i].trim().split(': ');
    cssProperties[keyValuePairs[i][0]] = keyValuePairs[i][1];
  }

  return cssProperties;
}

module.exports = convertToObject;
