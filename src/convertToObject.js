'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};

  // Access "backcround-color:    #fff"
  const splittedString = sourceString.split(';');

  for (const currentElement of splittedString) {
    // Example: "background-color", "   #fff"
    const splitElements = currentElement.split(':');

    if (splitElements.length === 2) {
      // Example: "background-color": "#fff", all spaces from sides are deleted
      cssProperties[splitElements[0].trim()] = splitElements[1].trim();
    }
  }

  return cssProperties;
}

module.exports = convertToObject;
