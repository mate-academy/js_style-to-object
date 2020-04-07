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
  const sourceArray = sourceString.split(';');

  sourceArray.forEach((value) => {
    const properties = value.split(':');

    if (properties[1]) {
      result[properties[0].trim()] = properties[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
