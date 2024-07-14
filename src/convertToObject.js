'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.includes(':'))
    .reduce((obj, item) => {
      const [property, ...value] = item.split(':');
      const trimProperty = property.trim();
      const trimValue = value.join(':').trim();

      if (trimProperty && trimValue) {
        obj[trimProperty] = trimValue;
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
