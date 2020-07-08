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
  // write your code here
  const objectString = {};
  const arrayString = sourceString.split(';');

  for (const detail of arrayString) {
    const [key, value] = detail.split(':');

    if ((key !== ' ') && (value !== undefined)) {
      objectString[key.trim()] = value.trim();
    }
  }

  return objectString;
}

module.exports = convertToObject;
