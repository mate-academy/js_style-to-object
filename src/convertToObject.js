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
  const outputStyles = {};

  const arrOfStyles = sourceString.split(/[:;]/)
    .map(item => item.trim())
    .filter(item => item.length > 0);

  for (let i = 0; i < arrOfStyles.length; i++) {
    outputStyles[arrOfStyles[i]] = arrOfStyles[i + 1];
    i++;
  }

  return outputStyles;
}

module.exports = convertToObject;
