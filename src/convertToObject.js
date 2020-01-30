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
  const convertedObj = {};
  const splittedSemi = sourceString.split(';');

  splittedSemi.forEach((keyValue) => {
    const splittedKeyValue = keyValue.split(':');

    if (splittedKeyValue.length === 2) {
      const key = splittedKeyValue[0].trim();
      const value = splittedKeyValue[1].trim();

      convertedObj[key] = value;
    }
  });

  return convertedObj;
}

module.exports = convertToObject;
