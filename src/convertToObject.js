'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarativeStyles = sourceString.split(';');

  return declarativeStyles
    .map((style) => style.split(':').map((str) => str.trim()))
    .reduce((convertedStyles, [property, value]) => {
      return { ...convertedStyles, [property]: value };
    }, {});
}

module.exports = convertToObject;
