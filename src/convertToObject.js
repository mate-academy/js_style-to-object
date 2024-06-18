'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const styleArray = sourceString.split(';');

  styleArray.forEach((style) => {
    const [property, value] = style.split(':').map((part) => part.trim());

    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
