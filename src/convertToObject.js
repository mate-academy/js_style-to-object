'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.split(';').reduce((obj, cssProperty) => {
    const [key, value] = cssProperty.split(':');

    if (key && value) {
      obj[key.trim()] = value.trim();
    }

    return obj;
  }, {});
}

module.exports = convertToObject;
