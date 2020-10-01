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
  const sourceStringParse = sourceString.split(';');
  const cssRules = {};

  sourceStringParse.forEach(rule => {
    const ruleParse = rule.split(':').map(ruleItem => ruleItem.trim());

    if (ruleParse[0] && ruleParse[1]) {
      cssRules[ruleParse[0]] = ruleParse[1];
    }
  });

  return cssRules;
}

module.exports = convertToObject;
