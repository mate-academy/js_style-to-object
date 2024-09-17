'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .filter(str => str.length > 0)
    .map(str => {
      const props = str
        .split(':')
        .map(prop => prop.trim());
      const key = props[0];
      const value = props[1];

      if (value !== undefined) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
