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
    .filter((item) => item.includes(':'))
    .reduce((stylesObj, item) => {
      const [key, ...rest] = item.split(':');
      const value = rest.join(':').trim();

      stylesObj[key.trim()] = value;

      return stylesObj;
    }, {});
}
module.exports = convertToObject;
