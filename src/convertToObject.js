'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 0);

  // Converte cada linha em uma entrada de objeto
  const stylesObject = {};

  stylesArray.forEach((style) => {
    const [key, value] = style.split(':').map((item) => item.trim());

    if (key && value) {
      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
