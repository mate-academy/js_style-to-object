'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const stylesArray = stylesString.split(';').filter(Boolean);
  const stylesObject = {};

  stylesArray.forEach((style) => {
    const [property, value] = style.split(':').map((s) => s.trim());

    stylesObject[property] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
