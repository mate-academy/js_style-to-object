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
  const splitedString = sourceString
    .split(';')
    .map(cssRule => cssRule.split(':')
      .map(itemOfElement => itemOfElement.trim()))
    .filter(cssRule => cssRule.length === 2);

  return Object.fromEntries(splitedString);
}

module.exports = convertToObject;
