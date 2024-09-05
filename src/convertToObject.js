'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str.length > 0)
    .map((str) => str.split(':').map((part) => part.trim()))
    .reduce((obj, [key, value]) => {
      obj[key] = value;

      return obj;
    }, {});
}

module.exports = convertToObject;
