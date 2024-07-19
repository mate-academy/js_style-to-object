'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  sourceString
    .split(';')
    .map((element) => element.split(':'))
    .map((element) => {
      if (element.length === 2) {
        cssObject[element[0].trim()] = element[1].trim();
      }
    });

  return cssObject;
}

module.exports = convertToObject;
