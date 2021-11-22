'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const elements = sourceString.split(';');

  elements.map(element => {
    const pair = element.split(': ');

    if (pair[0] && pair[1]) {
      result[pair[0].trim()] = pair[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
