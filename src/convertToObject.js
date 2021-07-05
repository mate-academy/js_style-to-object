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
  const arrayCssProperties = sourceString.split(';');
  const result = {};
  arrayCssProperties.forEach(item => {
    const [key, value] = item.split(':');
    if (value !== undefined) {
      result[key.trim()] = value.trim();
    }
  }
  );
  return result;
}

module.exports = convertToObject;
