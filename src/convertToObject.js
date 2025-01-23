'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(Boolean)
    .reduce((prevResult, entry) => {
      const [key, value] = entry.split(':').map((space) => space.trim());

      if (key && value) {
        prevResult[key] = value;
      }

      return prevResult;
    }, {});
}

module.exports = convertToObject;
