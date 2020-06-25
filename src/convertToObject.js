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
  return sourceString.split(';').reduce((allProperties, property) => {
    const properties = property.split(':');

    if (properties.length === 2) {
      allProperties[properties[0].trim()] = properties[1].trim();
    }

    return allProperties;
  }, {});
}

module.exports = convertToObject;
