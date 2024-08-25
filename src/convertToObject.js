'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const orderedStyles = sourceString.split(';');

  const cssObject = {};

  orderedStyles.forEach((style) => {
    const [key, value] = style.split(':');

    if (key && value) {
      cssObject[key.trim()] = value.trim();
    }
  });

  return cssObject;
}

module.exports = convertToObject;
