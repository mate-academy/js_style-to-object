'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((result, style) => {
      const [property, value] = style.split(':');

      if (value) {
        result[property.trim()] = value.trim();
      }

      return result;
    }, {});
}

module.exports = convertToObject;
