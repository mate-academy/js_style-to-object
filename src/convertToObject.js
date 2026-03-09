'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style && style.includes(':'))
    .reduce((cssStylesObject, style) => {
      const [property, value] = style.split(':');

      cssStylesObject[property.trim()] = value.trim();

      return cssStylesObject;
    }, {});
}

module.exports = convertToObject;
