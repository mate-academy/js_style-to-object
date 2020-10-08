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
  const rules = {};

  sourceString.split(';').forEach(rule => {
    const splitedRule = rule.trim().split(':');

    if (splitedRule[0]) {
      rules[splitedRule[0].trim()] = splitedRule[1].trim();
    }
  });

  return rules;
}

module.exports = convertToObject;
