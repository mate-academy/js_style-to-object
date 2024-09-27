'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const removeMultySumbol = sourceString.replace(/[\s]+/g, ' ');
  const partsOfString = removeMultySumbol
    .split(';').map(part => part.split(':'));
  const obj = {};

  for (let i = 0; i < partsOfString.length; i++) {
    if (partsOfString[i][1] !== undefined) {
      obj[partsOfString[i][0].trim()] = partsOfString[i][1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
