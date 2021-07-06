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
  const result = {};

  sourceString
    .split(';')
    .map(el => el.trim())
    .filter(element => element.length > 1)
    .map(property => property.split(':')
      .map(prop => prop.trim()))
    .reduce(function(key, value) {
      key[value[0]] = value[1];

      return key;
    }, result);

  return result;
}

module.exports = convertToObject;
