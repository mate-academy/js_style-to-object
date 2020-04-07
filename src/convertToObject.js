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

  sourceArray.forEach(element => {
    const [propety, value] = element.split(':');

    if (value !== undefined) {
      result[propety.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
