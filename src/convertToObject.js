'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(piece => piece.trim())
    .reduce((styles, declaration) => {
      const [property, value] = declaration.split(':');
      styles[property.trim()] = value.trim();
      return styles;
    }, {});
}

module.exports = convertToObject;
