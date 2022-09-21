'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};

  sourceString
    .split(';')
    .map(el => {
      const style = el
        .split(':')
        .map(element => element
          .trim());

      if (style.length > 1) {
        styleObj[style[0]] = style[1];
      }
    });

  return styleObj;
}

module.exports = convertToObject;
