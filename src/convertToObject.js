'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objRes = {};
  const newString = sourceString.split(';');

  for (const style of newString) {
    const keyVal = style.split(':').map(s => s.trim());

    if (keyVal.length === 2) {
      objRes[keyVal[0]] = keyVal[1];
    }
  }

  return objRes;
}

module.exports = convertToObject;
