'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const stylesArray = sourceString.split(';');

  stylesArray.forEach((style) => {
    const [key, value] = style.split(':').map((item) => item.trim());

    if (key && value) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
