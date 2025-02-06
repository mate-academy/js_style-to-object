'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString.split(';');
  const styleObject = {};

  styleArray.forEach((style) => {
    const [key, value] = style.split(':').map((element) => element.trim());

    if (value && key) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
