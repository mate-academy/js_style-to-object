'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const separateStyles = sourceString.split(';\n');
  const stylesObject = {};
  function addToObject(style, index, arr) {
    const transitionalArray = style.trim().split(': ');
    if (transitionalArray[1] !== undefined) {
      stylesObject[transitionalArray[0]] = transitionalArray[1];
    }
  }
  separateStyles.forEach(addToObject);
  return stylesObject;
}
module.exports = convertToObject;
