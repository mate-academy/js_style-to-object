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
  const stylesObj = {};

  sourceString
    .split(';')
    .map(stile => stile.trim())
    .filter(style => style.length > 0)
    .forEach(rule => {
      const ruleArr = rule.split(':');

      stylesObj[ruleArr[0].trim()] = ruleArr[1].trim();
    });

  return stylesObj;
}

module.exports = convertToObject;
