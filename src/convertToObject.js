'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .filter((style) => style.trim() !== '')
    .forEach((style) => {
      const parts = style.split(':');
      const property = parts[0].trim();
      const value = parts.slice(1).join(':').trim();

      stylesObject[property] = value;
    });

  return stylesObject;
}

module.exports = convertToObject;
