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
  return sourceString
    .split(';')
    .map(rule => rule.split(':'))
    .filter(rule => rule.length === 2)
    .reduce((acc, rule) => {
      const key = rule[0].trim();
      const prop = rule[1].trim();

      acc[key] = prop;

      return acc;
    }, {});
}

module.exports = convertToObject;
