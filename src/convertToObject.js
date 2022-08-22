'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes
 * a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const firstArr = sourceString.split(/[;]/);
  const secondArr = firstArr.map(x => x.trim());
  const result = {};

  secondArr.forEach(styleRule => {
    const splitedRule = styleRule.split(':');

    if (splitedRule[1]) {
      result[splitedRule[0].trim()] = splitedRule[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
