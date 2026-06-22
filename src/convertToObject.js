'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const declarations = sourceString
    .split(';')
    .filter(piece => piece.trim());

  for (const declaration of declarations) {
    const [property, value] = declaration.split(':');

    styles[property.trim()] = value.trim();
  }

  return styles;
}

module.exports = convertToObject;
