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
  const result = {};
  const covertedString = sourceString.split(';');
  covertedString.pop();

  for (const key of covertedString) {
    const keyVal = key.split(':');
    result[keyVal[0].trim()] = keyVal[1].trim();
  }

  return result;
}

module.exports = convertToObject;
