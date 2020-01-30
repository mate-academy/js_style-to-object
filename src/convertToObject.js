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
  return sourceString
    .split(';')
    .reduce((acc, declaration) => {
      const [prop, value] = declaration.split(':');

      if (value !== undefined) {
        return {
          ...acc,
          [prop.trim()]: value.trim(),
        };
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
