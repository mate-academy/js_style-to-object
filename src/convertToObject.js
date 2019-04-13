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
  const resultObj = {};
  const properties = sourceString.split(';');
  properties.forEach((item) => {
    const [key, value] = item.split(':');
    if (value !== undefined) {
      resultObj[key.trim()] = value.trim();
    }
  });
  return resultObj;
}

module.exports = convertToObject;
