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
  const stringArray = sourceString.split(';');

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].startsWith('\n')) {
      const key = stringArray[i].split(':');

      if (key[0] && key[1]) {
        result[`${key[0].trim()}`] = `${key[1].trim()}`;
      }
    }
  };

  return result;
}

module.exports = convertToObject;
