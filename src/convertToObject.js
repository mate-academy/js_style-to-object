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

  const splitSource = sourceString.split(';');

  const obj = {};

  for (const key in splitSource) {
    const m = splitSource[key].split(':');

    if (m[1] !== undefined) {
      obj[m[0].trim()] = m[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
