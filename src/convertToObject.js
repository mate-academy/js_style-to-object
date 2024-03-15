'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';');
  const styleObject = {};

  sourceArray.forEach((style) => {
    const [key, property] = style.split(':').map((part) => part.trim());

    styleObject[key] = property;
  });

  return styleObject;
}

module.exports = convertToObject;
