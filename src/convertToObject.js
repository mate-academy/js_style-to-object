'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .map((style) => style.trim())
    .reduce((stylesObject, style) => {
      const [property, value] = style.split(':');

      if (property && value) {
        return { ...stylesObject, [property.trim()]: value.trim() };
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
