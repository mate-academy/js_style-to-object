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
  const styleObject = {};

  const sourceStringArray = sourceString.split(';');

  sourceStringArray.forEach(splitString);

  function splitString(string) {
    const convertArray = string.split(':');

    if (convertArray.length === 2) {
      styleObject[convertArray[0].trim()] = convertArray[1].trim();
      convertArray.length = 0;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
