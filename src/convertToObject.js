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
  const properties = {};
  const propertiesArray = sourceString.replace(/;;|\n/g, '').split(';');

  for (const i in propertiesArray) {
    if (propertiesArray[i].trim().length > 0) {
      properties[`${propertiesArray[i].split(':')[0].trim()}`]
      = propertiesArray[i].split(':')[1].trim();
    }
  }

  return properties;
}

module.exports = convertToObject;
