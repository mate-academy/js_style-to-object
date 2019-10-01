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
  const res = {};
  stylesList.forEach(style => {
    const stylePiece = style.split(':');
    res[stylePiece[0].trim()] = stylePiece[1].trim();
  });
  return res;
}

module.exports = convertToObject;
