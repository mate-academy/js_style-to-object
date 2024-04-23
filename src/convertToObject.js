'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '')
    .reduce((obj, item) => {
      const [key, value] = item.split(':').map((prop) => prop.trim());

      obj[key] = value;

      return obj;
    }, {});
}

module.exports = convertToObject;
