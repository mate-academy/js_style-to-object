'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .filter((item) => item.includes(':'))
    .reduce((cssProperties, item) => {
      const [property, value] = item.split(':');

      cssProperties[property.trim()] = value.trim();

      return cssProperties;
    }, {});
}

module.exports = convertToObject;
