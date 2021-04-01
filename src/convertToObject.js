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
  const propertiesArray = sourceString.split(';');
  const newObject = {};

  propertiesArray.forEach(function(item) {
    const [key, value] = item.split(':');
    if (value !== undefined) {
      newObject[key.trim()] = value.trim();
    }
  });
  return newObject;
}

module.exports = convertToObject;
