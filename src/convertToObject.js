'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter(
      (declaration) =>
        declaration.includes(':') &&
        declaration.split(':')[0].trim().length > 0,
    )
    .map((declaration) => {
      const [property, value] = declaration.split(':');

      return [property.trim(), value.trim()];
    })
    .reduce((styleObject, [property, value]) => {
      styleObject[property] = value;

      return styleObject;
    }, {});
}
module.exports = convertToObject;
