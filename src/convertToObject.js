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
  // const goodCss = {};

  return sourceString.split(';')
    .map(item => item.split(':'))
    .filter(space => space.length === 2)
    .reduce((result, [key, value]) => {
      result[key.trim()] = value.trim();

      return result;
    }, {});

  // return goodCss;
}

module.exports = convertToObject;
