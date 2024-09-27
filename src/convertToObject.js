'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code her
  const styleString = sourceString
    .replace(/;/g, ':')
    .replace(/\n/g, '')
    .split(':');
  const stylesObject = {};
  for (let i = 0; i < styleString.length - 1; i += 2) {
    stylesObject[styleString[i].trim()] = styleString[i + 1].trim();
  }
  return stylesObject;
}

module.exports = convertToObject;
