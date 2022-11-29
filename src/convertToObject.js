'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedSourceString = sourceString.split(';');

  return splitedSourceString.reduce((css, rule) => {
    const splitRule = rule.split(':');
    const key = splitRule[0];
    const value = splitRule[1];

    if (key.length > 0 && value) {
      css[key.trim()] = value.trim();
    }

    return css;
  }, {});
}

module.exports = convertToObject;
