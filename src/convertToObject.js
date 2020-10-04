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
  const sourceConverted = {};

  sourceString.split(';').forEach(rule => {
    const splitedRule = rule.trim().split(':');

    if (splitedRule[0]) {
      sourceConverted[splitedRule[0].trim()] = splitedRule[1].trim();
    }
  });

  return sourceConverted;
}

module.exports = convertToObject;
