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
