'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((style) => style.trim() !== '')
    .reduce((cssRules, style) => {
      const [property, value] = style.split(':');

      cssRules[property.trim()] = value.trim();

      return cssRules;
    }, {});
}

module.exports = convertToObject;
