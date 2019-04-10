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
  let ourObject = {};
  let properties = sourceString.split(';');
  for (let property of properties) {
    let [keys, values] = property.split(':');
    if (values !== undefined) {
      ourObject[keys.trim()] = values.trim();
    }
  }
  return ourObject;
}

module.exports = convertToObject;
