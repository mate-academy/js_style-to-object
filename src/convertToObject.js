'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el.length)
    .map((el) => el.split(':'))
    .reduce((styles, elem) => {
      if (elem.length === 2) {
        styles[elem[0].trim()] = elem[1].trim();
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
