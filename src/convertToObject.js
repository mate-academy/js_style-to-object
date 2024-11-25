'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((line) => line.trim())
    .reduce((prev, item) => {
      const [key, value] = item.split(':').map((part) => part && part.trim());

      if (key && value) {
        return { ...prev, [key]: value };
      }

      return prev;
    }, {});
}
module.exports = convertToObject;
