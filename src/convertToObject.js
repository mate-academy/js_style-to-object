'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((value) => value !== '')
    .map((el) => el.split(':').map((item) => item.trim()))
    .reduce((obj, [key, value]) => {
      obj[key] = value;

      return obj;
    }, {});
}

module.exports = convertToObject;
