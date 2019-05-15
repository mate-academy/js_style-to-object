'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} styleString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const cssObject = {};
  const stringProperties = stylesString.split(';');

  for (let i = 0; i < stringProperties.length; i++) {
    if (stringProperties[i].length > 1) {
      const stringParts = stringProperties[i].split(':');
      const key = stringParts[0].trim();
      const value = stringParts[1].trim();
      cssObject[key] = value;
    }
    // cssObject[stringParts[0]] = stringParts[1];
  }
  return cssObject;
}
module.exports = convertToObject;
