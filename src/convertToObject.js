'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((css, style) => {
      const [property, value] = style.trim().split(':');

      if (value) {
        return {
          ...css,
          [property.trim()]: value.trim(),
        };
      }

      return {
        ...css,
      };
    }, {});
}

module.exports = convertToObject;
