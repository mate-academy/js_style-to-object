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
  const strToArray = sourceString.split(';');
  const outputObj = {};

  strToArray.forEach((keyVal) => {
    if (keyVal !== 0) {
      const arrayKeyVal = keyVal.split(':');

      const key = (arrayKeyVal[0]).trim();
      let value = '';

      if (arrayKeyVal[1] !== undefined) {
        value = (arrayKeyVal[1]).trim();
        outputObj[key] = value;
      }
    }
  });

  return outputObj;
}

module.exports = convertToObject;
