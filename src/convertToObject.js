'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((item) => item.includes(':'))
    .reduce((stylesObject, item) => {
      const [key, ...valueParts] = item.split(':');
      const cleanKey = key.trim();
      const cleanValue = valueParts.join(':').trim();

      if (cleanKey && cleanValue) {
        stylesObject[cleanKey] = cleanValue;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
