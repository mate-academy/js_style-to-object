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
  const cleanArray = sourceString.split(';')
    .map((element) => element.trim())
    .filter((element) => element.length > 0)
    .map((element) => element.split(':').map(el => el.trim()));

  return Object.fromEntries(cleanArray);
}

module.exports = convertToObject;
