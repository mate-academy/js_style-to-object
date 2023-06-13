'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');
  const stylesObject = {};

  stylesArray.forEach(stylesArrayItem => {
    const splitStyle = stylesArrayItem.split(':');

    if (splitStyle.length === 2) {
      stylesObject[splitStyle[0].trim()] = splitStyle[1].trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
