'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((item) => item.trim())
    .reduce((obj, item) => {
      const [key, value] = item.split(':').map((str) => str.trim());

      if (key && value) {
        obj[key] = value;
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
