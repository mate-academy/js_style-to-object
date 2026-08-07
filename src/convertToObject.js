'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  return styles
    .split(';')
    .filter((style) => style.includes(':'))
    .reduce((stylesObject, style) => {
      const [property, value] = style.split(':');

      stylesObject[property.trim()] = value.trim();

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
