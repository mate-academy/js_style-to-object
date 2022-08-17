'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objCss = {};

  sourceString
    .split(';')
    .forEach(styleRule => {
      const splitedRule = styleRule.split(':');

      if (splitedRule[1]) {
        objCss[splitedRule[0].trim()] = splitedRule[1].trim();
      }
    });

  return objCss;
}

module.exports = convertToObject;
