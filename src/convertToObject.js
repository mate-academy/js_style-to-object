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
  const properties = sourceString.split(';').map(prop => {
    const property = prop.split(':').map(propertyItem => propertyItem.trim());

    return property;
  }).filter(prop => prop.length > 1);

  return Object.fromEntries(properties);
}

module.exports = convertToObject;
