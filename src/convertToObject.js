'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.trim().split(';');
  const stylesObject = {};

  stylesArray.forEach(style => {
    const parts = style.split(':').map(part => part.trim());

    if (parts.length === 2) {
      stylesObject[parts[0]] = parts[1];
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
