'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

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
