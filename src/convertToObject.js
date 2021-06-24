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
  const allProperties = sourceString.split(';').map(property => {
    return property.replace(/[\n]+/, '').trim();
  }).filter(property => property.length > 0);

  const keys = allProperties.map(property => property.split(':')[0].trim());
  const values = allProperties.map(property => property.split(':')[1].trim());

  const result = {};

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }

  return result;
}

module.exports = convertToObject;
