'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleRules = sourceString.split(';');
  const newStyles = {};

  styleRules.map((style) => {
    if (style.trim() === '') {
      return;
    }

    let [property, value] = style.split(':');

    if (!property || !value) {
      return;
    }

    property = property.trim();
    value = value.trim();

    newStyles[property] = value;
  });

  return newStyles;
}

module.exports = convertToObject;
