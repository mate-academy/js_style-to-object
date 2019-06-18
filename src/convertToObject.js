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
  const fixedString
    = sourceString
      .replace(/\n/g, '')
      .replace(/:/g, ';')
      .split(';');
  const result = {};
  if (fixedString.length > 0) {
    for (
      let i = 0;
      i < fixedString.length - 1;
      i += 2
    ) {
      result[fixedString[i].trim()]
        = fixedString[i + 1].trim();
    }
  } return result;
}

module.exports = convertToObject;
