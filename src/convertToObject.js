'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    const [property, value] = declaration.split(':');

    if (property && value) {
      styles[property.trim()] = value.trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
