'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((declaration) => declaration.trim())
    .reduce((styles, declaration) => {
      const [property, value] = declaration.split(':');

      if (property && value) {
        styles[property.trim()] = value.trim();
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
