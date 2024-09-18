'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((style) => style.trim())
    .filter(Boolean)
    .map((style) => {
      const [property, value] = style.split(':');

      if (property === undefined || value === undefined) {
        return null;
      }

      return [property.trim(), value.trim()];
    })
    .filter(Boolean)
    .reduce((obj, [property, value]) => {
      obj[property] = value;

      return obj;
    }, {});
}

module.exports = convertToObject;
