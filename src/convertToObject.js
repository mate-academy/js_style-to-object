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
  const stylesFromString = {};

  sourceString.split(';').forEach(item => {
    const [key, value] = item.split(':');

    if (value !== undefined) {
      stylesFromString[key.trim()] = value.trim();
    }
  });

  return stylesFromString;
}

module.exports = convertToObject;
