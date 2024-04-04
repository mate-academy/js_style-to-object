'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertStyles = {};

  const stylesString = sourceString.split(';');

  stylesString.forEach((styleString) => {
    const [key, value] = styleString.split(':').map((item) => item.trim());

    if (key && value) {
      convertStyles[key] = value;
    }
  });

  return convertStyles;
}

module.exports = convertToObject;
