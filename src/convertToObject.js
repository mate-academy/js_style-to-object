'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

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
