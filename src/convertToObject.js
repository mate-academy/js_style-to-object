'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArr = sourceString.split(';').map((item) => item.split(':'));
  const sourceObj = {};

  for (const item of sourceArr) {
    if (item.length === 2) {
      sourceObj[item[0].trim()] = item[1].trim();
    }
  }

  return sourceObj;
}

module.exports = convertToObject;
