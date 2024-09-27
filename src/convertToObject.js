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
      let [key, value] = item.split(':');

      key = key.trim();
      value = value.trim();

      if (key && value) {
        obj[key] = value;
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
