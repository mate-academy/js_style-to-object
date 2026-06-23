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
    .reduce((stylesObject, currentItem) => {
      const [key, value] = currentItem.split(':');
      const preparedkey = key.trim();
      const preparedvalue = value.trim().replace(/;$/, '');

      stylesObject[preparedkey] = preparedvalue;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
