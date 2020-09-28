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
  const cssRules = sourceString.split(';');
  const cssObj = {};

  cssRules.forEach(rule => {
    const splitedRule = rule.split(':');

    if (splitedRule[0] && splitedRule[1]) {
      const key = splitedRule[0].trim();
      const value = splitedRule[1].trim();

      cssObj[key] = value;
    }
  });

  return cssObj;
}

module.exports = convertToObject;
