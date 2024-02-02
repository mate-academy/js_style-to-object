'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
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
