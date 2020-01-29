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
  const goodCss = {};

  sourceString.split(';')
    .map(item => item.split(':'))
    .filter(pair => pair.length === 2)
    .forEach(([key, value]) => {
      goodCss[key.trim()] = value.trim();
    });

  return goodCss;
}

module.exports = convertToObject;
