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
  const sourceStringPars = sourceString.split(';');
  const cssRuls = {};

  sourceStringPars
    .forEach(rule => {
      const rulePars = rule
        .split(':')
        .map(ruleItem => ruleItem.trim());

      if (rulePars[0] && rulePars[1]) {
        cssRuls[rulePars[0]] = rulePars[1];
      }
    });

  return cssRuls;
}

module.exports = convertToObject;
