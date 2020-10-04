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
  // write your code here
  const sourceStringParsed = sourceString.split(';');
  const rules = {};

  sourceStringParsed.forEach(rule => {
    const ruleParsed = rule.split(': ').map(ruleItem => ruleItem.trim());

    if (ruleParsed[0] && ruleParsed[1]) {
      rules[ruleParsed[0]] = ruleParsed[1];
    }
  });

  return rules;
}

module.exports = convertToObject;
