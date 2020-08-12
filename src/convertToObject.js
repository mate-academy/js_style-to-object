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
    .filter(property => property.length > 0)
    .map(property => {
      const prop = property
        .split(':')
        .map(part => part.trim());

      if (prop[1]) {
        result[prop[0]] = prop[1];
      }
    });

  return result;
}

module.exports = convertToObject;
