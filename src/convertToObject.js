'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesFromString = {};

  sourceString
    .split(';')
    .filter(style => style.trim())
    .forEach(style => {
      const [property, value] = style.split(':').map(part => part.trim());

      stylesFromString[property] = value;
    });

  return stylesFromString;
}

module.exports = convertToObject;
