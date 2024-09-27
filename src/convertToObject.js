'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString.split(';');
  stylesList.pop();
  const res = {};
  stylesList.forEach(style => {
    const stylePiece = style.split(':');
    res[stylePiece[0].trim()] = stylePiece[1].trim();
  });
  return res;
}

module.exports = convertToObject;
