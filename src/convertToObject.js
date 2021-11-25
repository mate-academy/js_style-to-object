'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';')
    .map(property => property.trim()).filter(Boolean)
    .map(property => property.split(':').map(value => value.trim()));

  return Object.fromEntries(properties);
}

module.exports = convertToObject;
