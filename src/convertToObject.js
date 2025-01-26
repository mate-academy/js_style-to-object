'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((el) => el.trim())
    .map((el) => el.split(':').map((part) => part.trim()))
    .reduce((obj, keyValueArr) => {
      obj[keyValueArr[0]] = keyValueArr[1];

      return obj;
    }, {});
}

module.exports = convertToObject;
