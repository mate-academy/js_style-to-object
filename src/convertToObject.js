'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((result, style) => {
    const declaration = style.trim();

    if (!declaration) {
      return result;
    }

    const [property, value] = declaration.split(':');

    result[property.trim()] = value.trim();

    return result;
  }, {});
}

module.exports = convertToObject;
