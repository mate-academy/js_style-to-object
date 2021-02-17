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
  const result = {};
  const values = sourceString
    .split(';')
    .filter(el => el.includes(':'))
    .map(rule => rule.split(':')
      .map(partOfRule => partOfRule.trim()));

  for (const value of values) {
    result[value[0]] = value[1];
  }

  return result;
}

module.exports = convertToObject;
