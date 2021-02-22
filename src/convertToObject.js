'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleElements = sourceString.split(';');
  const styleElement = styleElements.map(element =>
    element.split(':').map(property => property.trim()));

  const styleObject = {};

  for (let i = 0; i < styleElements.length; i++) {
    if (styleElement[i][1] !== undefined) {
      styleObject[styleElement[i][0]] = styleElement[i][1];
    }
  }

  return styleObject;
}

module.exports = convertToObject;
