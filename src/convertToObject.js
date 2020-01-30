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
    .reduce((objectOfStyles, styles) => {
      const [prop, value] = objectOfStyles.split(':');

      if (prop !== undefined && value !== undefined) {
        return {
          ...objectOfStyles,
          [prop.trim()]: value.trim(),
        };
      }

      return objectOfStyles;
    }, {});
}

module.exports = convertToObject;
