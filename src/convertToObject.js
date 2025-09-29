'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .reduce((stylesObject, line) => {
      const colonIndex = line.indexOf(':');

      if (colonIndex === -1) {
        return stylesObject;
      }

      const prop = line.slice(0, colonIndex).trim();
      const val = line.slice(colonIndex + 1).trim();

      if (prop && val) {
        stylesObject[prop] = val;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
