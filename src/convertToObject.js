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
  const obj = {};
  const string = sourceString.split(';');
  for (let item of string) {
    const [key, value] = item.split(':');
    if (value !== undefined) {
      obj[key.trim()] = value.trim();
    }
  }
  return obj;
}

module.exports = convertToObject;
