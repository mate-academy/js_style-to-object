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
  const stringArr = sourceString.split(';');
  const resultStyles = {};
  const splitedAndTrimmedStyles = stringArr
    .map(
      (string) => string.split(':')
        .map(
          (style) => style.trim()
        )
    );

  for (const style of splitedAndTrimmedStyles) {
    if (style.length > 1) {
      resultStyles[style[0]] = style[1];
    }
  }

  return resultStyles;
}

module.exports = convertToObject;
