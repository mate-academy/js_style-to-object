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
    .filter(string => string.length > 5)
    .map(prop => {
      const separator = prop.indexOf(':');

      result[prop.slice(0, separator).trim()]
      = prop.slice(separator + 1).trim();
    });

  return result;
}

module.exports = convertToObject;
