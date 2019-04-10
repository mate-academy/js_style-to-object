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
  let result = {};
  let properties = sourceString.split(';').slice(0, -1);
  let keys = [];
  let values = [];
  for (let property of properties) {
    let parts = property.split(':');
    keys.push(parts[0].trim());
    values.push(parts[1].trim());
  }
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
};

module.exports = convertToObject;
