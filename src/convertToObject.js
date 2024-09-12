'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssRule = sourceString
    .split(';')
    .map(element => element.split(':'))
    .reduce((acc, property) => {
      if (property[0] && property[1]) {
        acc[property[0].trim()] = property[1].trim();
      }

      return acc;
    }, {});

  return cssRule;
}

module.exports = convertToObject;
