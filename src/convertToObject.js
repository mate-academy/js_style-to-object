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
  const cssParams = {};

  sourceString
    .split('\n').join('')
    .split(';')
    .map((rule) => rule.split(':'))
    .filter(([key, value]) => key.trim() && value.trim())
    .map(function([key, value]) {
      cssParams[key.trim()] = value.trim();
    }
    );

  return cssParams;
}

module.exports = convertToObject;
