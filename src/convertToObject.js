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
  const properties = sourceString.split(';');
  let cssObject = {};
  for (let property of properties) {
    const [key, value] = property.split(':');
    if (value !== undefined) {
      cssObject[key.trim()] = value.trim();
    }
  }
  return cssObject;
};

module.exports = convertToObject;
