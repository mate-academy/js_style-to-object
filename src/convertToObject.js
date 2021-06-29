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
  const result = {};
  const properties = sourceString.split(';').map(prop => {
    const property = prop.split(':');

    for (let i = 0; i < property.length; i++) {
      property[i] = property[i].trim();
    }

    return property;
  }).filter(prop => prop.length > 1);

  for (const element of properties) {
    result[element[0]] = element[1];
  }

  return result;
}

module.exports = convertToObject;
