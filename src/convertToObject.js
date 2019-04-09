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
  const separateStyles = sourceString.split(';\n');
  const stylesObject = {};
  function addToObject(style, index, arr) {
    const transitionalArray = style.trim().split(': ');
    stylesObject[transitionalArray[0]] = transitionalArray[1];
  }
  separateStyles.forEach(addToObject);
  delete stylesObject[''];
  return stylesObject;
}

module.exports = convertToObject;
