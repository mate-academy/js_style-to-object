'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const convertedObject = {};
  const properties = sourceString.split(';');
  for (let property of properties) {
    let [keys, values] = property.split(':');
    if (values !== undefined) {
      convertedObject[keys.trim()] = values.trim();
    }
  }
  return convertedObject;
}

module.exports = convertToObject;
