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
  const sourceArr = sourceString.split(';')
    .map(rule => rule.split(':'))
    .map(rule => rule.map(x => x.trim()))
    .filter(pair => pair.length === 2);

  for (const prop of sourceArr) {
    result[prop[0]] = prop[1];
  }

  return result;
};

module.exports = convertToObject;
