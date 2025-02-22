'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((style) => style.includes(':'))
    .reduce((stylesObject, style) => {
      const [key, value] = style.split(':').map((item) => item.trim());

      if (key && value) {
        stylesObject[key] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
