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
  // write your code here

  const convertedToObject = {};

  sourceString
    .split(';')
    .forEach(CSSrule => {
      const splitedCSSrule = CSSrule.trim().split(':');

      if (splitedCSSrule.length > 1) {
        convertedToObject[splitedCSSrule[0].trim()] = splitedCSSrule[1].trim();
      }
    });

  return convertedToObject;
}

module.exports = convertToObject;
