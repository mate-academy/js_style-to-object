'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesInObject = {};

  sourceString.split(';').forEach((style) => {
    if (style.trim().length > 0) {
      const [prop, value] = style.split(':');

      stylesInObject[prop.trim()] = value.trim();
    }
  });

  return stylesInObject;
}

module.exports = convertToObject;
