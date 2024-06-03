'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((style) => /\S/.test(style))
    .reduce((accumulator, styleItem) => {
      const keyValue = styleItem.split(':').map((item) => item.trim());
      const [property, value] = keyValue;

      accumulator[property] = value;

      return accumulator;
    }, {});
}

module.exports = convertToObject;
