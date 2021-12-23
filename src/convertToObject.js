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
  const result = {};

  sourceString
    .split(';')
    .forEach(item => {
      const split = item.split(':');

      if (split.length === 2) {
        result[split[0].trim()] = split[1].trim();
      }
    });

  return result;
}

module.exports = convertToObject;
