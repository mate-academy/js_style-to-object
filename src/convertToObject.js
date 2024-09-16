'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArr = sourceString.split(/:|;/);
  const styleObject = {};

  for (let i = 0; i < styleArr.length - 1; i += 2) {
    styleObject[styleArr[i].trim()] = styleArr[i + 1].trim();
  }

  return styleObject;
}

module.exports = convertToObject;
