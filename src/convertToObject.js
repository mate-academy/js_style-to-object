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
  const propertiesObject = {};

  for (const item of propertiesArray) {
    const property = item.split(':');

    if (property[0] && property[1]) {
      const key = property[0].trim();
      const value = property[1].trim();

      propertiesObject[key] = value;
    }
  }

  return propertiesObject;
}

module.exports = convertToObject;
