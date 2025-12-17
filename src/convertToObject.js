'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};

  sourceString
    .split(';')
    .map((properties) => properties.trim())
    .filter((properties) => properties)
    .forEach((properties) => {
      const [property, value] = properties.split(':');

      if (property && value) {
        cssProperties[property.trim()] = value.trim();
      }
    });

  return cssProperties;
}

module.exports = convertToObject;
