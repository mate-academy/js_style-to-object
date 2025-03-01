'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const stylesObject = {};

  stylesString
    .split(';')
    .map(style => style.trim())
    .filter(style => style.includes(':'))
    .forEach(style => {
      const [key, value] = style.split(':');
      stylesObject[key.trim()] = value.trim();
    });

  return stylesObject;
}
module.exports = convertToObject;
