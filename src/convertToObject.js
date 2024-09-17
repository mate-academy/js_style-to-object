'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString.split(';');

  stylesList.pop();

  const convertedObj = {};

  stylesList.forEach(style => {
    if (style.trim().length !== 0) {
      const stylePiece = style.split(':');

      convertedObj[stylePiece[0].trim()] = stylePiece[1].trim();
    }
  });

  return convertedObj;
}

module.exports = convertToObject;
