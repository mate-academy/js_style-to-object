'use strict';

/**
 * Implement convertToObject function:
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((styles, style) => {
      const [property, value] = style.split(':');

      if (value) {
        styles[property.trim()] = value.trim();
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
