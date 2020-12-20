'use strict';

/**
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString string with CSS styles.
 *
 * @return {object} object with CSS properties as keys
 * and those properties' values as values.
 */
function convertToObject(sourceString) {
  const result = {};
  const properties = sourceString
    .split(';')
    .map(property => property.trim())
    .filter(item => item.length > 0);

  for (const property of properties) {
    result[property.split(':')[0].trim()] = property.split(':')[1].trim();
  }

  return result;
}

module.exports = convertToObject;
