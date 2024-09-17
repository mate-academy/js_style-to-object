'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleObject = {};
  const sourceArray = sourceString.split(';');

  for (let i = 0; i < sourceArray.length; i++) {
    const innerArray = sourceArray[i].trim().split(': ');
    styleObject[innerArray[0]] = innerArray[1];
  }

  return styleObject;
}

module.exports = convertToObject;
