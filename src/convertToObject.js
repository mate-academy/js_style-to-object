'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .filter(Boolean)
    .reduce((stylesObject, style) => {
      const [property, value] = style.split(':').map((s) => s.trim());

      stylesObject[property] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
