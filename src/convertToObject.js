'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((value) => value.trim())
    .reduce((prev, curr) => {
      const [key, value] = curr.split(':').map((part) => part.trim());

      return {
        ...prev,
        [key]: value,
      };
    }, {});
}

module.exports = convertToObject;
